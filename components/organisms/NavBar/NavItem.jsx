import React from "react";
import classnames from 'classnames';
import Link from "next/link";
import { Icon, IconName } from "@blueprintjs/core";
// import { classNames } from "../../../utils/helpers";

const NavItem = ({ icon, path, isSelected }) => {
  return (
    <Link href={path}>
      <div
        className={classnames("rounded p-3 m-auto cursor-pointer text-white", {
          "bg-tertiary text-tcolor-5": isSelected,
        })}
      >
        <Icon icon={icon} iconSize={20} color="#fff" />
      </div>
    </Link>
  );
};

NavItem.defaultProps = {};

export default NavItem;
