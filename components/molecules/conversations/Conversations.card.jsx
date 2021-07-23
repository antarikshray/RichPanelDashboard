import React from "react";
import { Card, Elevation, Checkbox } from "@blueprintjs/core";

const ConversationCard = ({ user, title, type, description, dur, onSelect }) => {
  return (
    <Card
      interactive={true}
      elevation={Elevation.THREE}
      className="flex flex-col h-32 ml-6 border-b-2 pt-4 hover:bg-graydefault"
      onClick={onSelect}
    >
      <div className="flex flex-row justify-around">
        <Checkbox large={true} className="" />
        <div className="flex flex-col">
          <h5 className=" text-xl">{user}</h5>
          <h5>{type}</h5>
        </div>
        <p className="ml-24">{dur}</p>
      </div>
      <h5 className=" text-base ml-6">{title}</h5>
      <p className=" text-base text-gray-600 ml-6">{description}</p>
    </Card>
  );
};

export default ConversationCard;
