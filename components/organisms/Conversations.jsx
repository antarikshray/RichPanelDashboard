import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/dist/client/router";
import { Icon, IconName, Button } from "@blueprintjs/core";
import axios from "axios";

import Loader from "../molecules/loader";
import ConversationCard from "../molecules/conversations/Conversations.card";

import {
  allPostsContext,
  selectedContext,
} from "../molecules/contexts/allPostsContext";

export default function Conversations() {
  const history = useRouter();

  const { allData, setAllData } = useContext(allPostsContext);
  const { selected, setSelected } = useContext(selectedContext);

  const calculateDifference = (daet) => {
    var diff = new Date() - new Date(daet);
    var min = Math.floor(diff / 60000);
    return min.toString() + " m";
  };

  const fetchData = () => {
    axios
      .get(
        "https://graph.facebook.com/690463615138629/feed?fields=id,created_time,updated_time,message,picture,from,comments{id,from,message,comment_count,created_time,comments{id,message,from,comment_count,created_time}}&access_token=" +
          localStorage.getItem("token")
      )
      .then((response) => {
        console.log(response);
        let modData = [];
        response.data.data.map((data) => {
          let modPrimaryComment = [];
          data.comments?.data.map((primary) => {
            let modNestedComment = [];
            if (primary.comment_count) {
              primary.comments.data.map((nested) => {
                const newNestedComment = {
                  id: nested.id,
                  from: nested.from,
                  message: nested.message,
                  created_time: nested.created_time,
                };
                modNestedComment = [...modNestedComment, newNestedComment];
              });
            }
            const newPrimaryComment = {
              id: primary.id,
              message: primary.message,
              created_time: primary.created_time,
              from: primary.from,
              nestedComment: modNestedComment,
            };
            modPrimaryComment = [...modPrimaryComment, newPrimaryComment];
          });
          const newData = {
            id: data.id,
            from: data.from,
            user: data.from.name,
            type: "Facebook Post",
            created_time: data.created_time,
            updated_time: data.updated_time,
            message: data.message,
            picture: data.picture,
            primaryComment: modPrimaryComment,
          };
          modData = [...modData, newData];
        });
        setAllData(modData);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchData();
    } else {
      history.replace("/");
    }
  }, []);

  return (
    <div className="flex flex-col h-full w-1/4 ml-16 bg-white">
      <div className="flex flex-row justify-around items-center h-20">
        <Icon icon="align-left" />
        <h1 className=" text-3xl font-medium">Conversations</h1>
        <Button
          onClick={fetchData}
          className="ml-24 h-11 w-11 hover:bg-graydefault flex justify-center items-center"
        >
          <Icon icon="repeat" />
        </Button>
      </div>
      {allData?.map((data) => {
        {
          return data.primaryComment?.map((primary) => (
            <>
              <ConversationCard
                title="title"
                user={primary.from.name}
                dur={calculateDifference(primary.created_time)}
                description={primary.message}
                onSelect={() => {
                  setSelected(primary.created_time);
                }}
                type={data.type}
              />
              {primary.nestedComment?.map((nested) => (
                <ConversationCard
                  title="title"
                  user={nested?.from?.name? nested?.from?.name : "Unknown"}
                  dur={calculateDifference(nested.created_time)}
                  description={nested.message}
                  onSelect={() => {
                    setSelected(nested.created_time);
                  }}
                  type={data.type}
                />
              ))}
            </>
          ));
        }
      })}
    </div>
  );
}
