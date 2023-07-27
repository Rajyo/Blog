import React from "react";
import { Category } from "../../components/category/Category";
import { CardHome } from "../../components/blog/CardHome";
import Banner from "../../components/banner/Banner";

export const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <CardHome />
    </>
  );
};
