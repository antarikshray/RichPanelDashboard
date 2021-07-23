import React, { useContext, useState, useEffect } from "react";
// import { Label } from "@blueprintjs/core";
import {
  allPostsContext,
  selectedContext,
} from "../molecules/contexts/allPostsContext";

export default function ChatBox() {
  const { allData, setAllData } = useContext(allPostsContext);
  const { selected, setSelected } = useContext(selectedContext);

  const [currUser, setCurrUser] = useState();

  useEffect(()=>{
    allData.map(data => {
      data.primaryComment?.map(primary => {
        if(primary.created_time === selected){
          setCurrUser(primary);
        }
        primary?.nestedComment?.map(nested =>{
          if(nested.created_time === selected){
            setCurrUser(nested);
          }
        })
      })
    });
  });

  return (
    <div className="flex flex-col items-center h-screen w-7/12 bg-graychat border-l-2 border-r-2">
        <div className=" flex flex-row justify-items-start items-center h-20 bg-white w-full border-b-2 p-4">
          <h1 className=" text-3xl font-medium">{currUser?.from?.name}</h1>
        </div>
        <div className="h-screen w-full">
          </div>
        <input className="w-11/12 h-10 mb-4 border-2 border-indigo-600" placeholder=" Comment" />
    </div>
  );
}
