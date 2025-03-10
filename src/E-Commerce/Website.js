import React from "react";
import { Header } from "./Header"; 
import Footer from "./Footer"; 
import { ShopAll } from "./ShopAll";
import "bootstrap/dist/css/bootstrap.min.css";


export const Website = () => {
  return (
    <div>
      <Header />
      <ShopAll />
      <Footer />
    </div>
  );
};


