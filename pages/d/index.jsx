import React from "react";
import { getLayout } from "../../components/organisms/Layout";
import HomePage from "../../components/homepage";

const HomeLoader = () => {
  return <HomePage />;
};

HomeLoader.defaultProps = {};
HomeLoader.getLayout = (page) => getLayout(page);


export default HomeLoader;