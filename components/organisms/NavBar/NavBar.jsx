import Link from "next/link";
import React from "react";

const NavBar = ({ children }) => {
  return (
    <div className="w-16 bg-navbar overflow-auto z-10 fixed min-h-screen bg-navbar">
      <div className="h-16 border-b border-gray-600">
        <Link href="/d">
          <img
            className="p-2"
            src="./Richlogo.png"
            // alt="brand image"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between px-2 py-3 h-screen">{children}</div>
    </div>
  );
};

NavBar.defaultProps = {};

export default NavBar;