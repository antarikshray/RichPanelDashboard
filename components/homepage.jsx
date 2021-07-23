import React, { useState, useMemo } from "react";
import ConversationsBoard from "./organisms/Conversations";
import ChatBox from "./organisms/ChatBox";
import UserDetails from "./organisms/UserDetails";

import {
  allPostsContext,
  selectedContext,
} from "./molecules/contexts/allPostsContext";

export default function HomePage() {
  const [selected, setSelected] = useState();
  const [allData, setAllData] = useState([]);

  const selectedValue = useMemo(
    () => ({ selected, setSelected }),
    [selected, setSelected]
  );

  const allDataValue = useMemo(
    () => ({ allData, setAllData }),
    [allData, setAllData]
  );

  return (
    <div className="flex flex-row h-screen w-screen">
      <allPostsContext.Provider value={allDataValue}>
        <selectedContext.Provider value={selectedValue}>
          <ConversationsBoard />
          <ChatBox />
          <UserDetails />
        </selectedContext.Provider>
      </allPostsContext.Provider>
    </div>
  );
}
