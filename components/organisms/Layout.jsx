import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar/NavBar";
import NavItem from "./NavBar/NavItem";

import Profilepic from "../molecules/Profilepic";

import { dashroutes } from "./dashboard-routes";

const Layout = ({ children }) => {
  let history = useRouter();
  const [profile, setProfile] = useState("https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80");

  useEffect(()=>{
    setProfile(localStorage?.getItem("picture"));
  })

  return (
    <div className="flex h-screen">
      <NavBar>
        <div className="flex flex-col h-screen">
          <div className="h-5/6">
            {dashroutes.map((route) => (
              <NavItem
                icon={route.icon}
                path={route.path}
                isSelected={history.asPath.startsWith(route.path)}
              />
            ))}
          </div>
          <div>
            <Profilepic image={profile} />
            <div className="h-4 w-4 bg-green-700 rounded-full" style={{position: 'absolute', marginLeft: '30px', marginTop: '-10px'}}>
              </div>
          </div>
        </div>
      </NavBar>
      <section className="w-header">
        <main className="">{children}</main>
      </section>
    </div>
  );
};

Layout.defaultProps = {};

export const getLayout = (page) => <Layout>{page}</Layout>;

export default Layout;
