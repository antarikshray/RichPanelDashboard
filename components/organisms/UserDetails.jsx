import React, { useContext, useEffect, useState } from "react";
import { Button } from "@blueprintjs/core";

import {
  allPostsContext,
  selectedContext,
} from "../molecules/contexts/allPostsContext";

export default function UserDetails() {
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
    <div className="flex flex-col justify-start items-center h-full w-3/12 bg-grayuser">
      <div className="flex flex-col justify-around items-center h-2/6 w-full bg-white">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.xcitefun.net%2Fusers%2F2014%2F07%2F359035%2Cxcitefun-sunset-beach-9.jpg&f=1&nofb=1"
          className=" h-24 w-24 rounded-full"
        />
        <h1 className=" text-lg font-bold">{currUser?.from?.name}</h1>
        <h1 className=" text-sm">Offline</h1>
        <div className="flex flex-row gap-20">
          <Button
            text="Call"
            className=" flex-none h-10 w-32 border-2 rounded-md"
          />
          <Button text="Profile" className=" h-10 w-32 border-2 rounded-md" />
        </div>
      </div>

      <div className="flex flex-col justify-around pl-4 h-1/4 bg-white w-11/12 mt-4">
        <h1 className=" text-xl font-semibold" > Customer Details</h1>
        <div className="flex flex-row gap-32">
          <h1 className=" font-normal text-base text-gray-600" >Email</h1>
          <h1 className="" >abc@gmail.com</h1>
        </div>
        <div className="flex flex-row gap-32">
          <h1 className=" font-normal text-base text-gray-600">First Name</h1>
          <h1>abc</h1>
        </div>
        <div className="flex flex-row gap-32">
          <h1 className=" font-normal text-base text-gray-600">Last Name</h1>
          <h1>Ray</h1>
        </div>
      </div>
    </div>
  );
}
