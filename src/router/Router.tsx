import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Goods from "../goods/Goods";
import Customer from "../customer/Customer";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='goods' element={<Goods />}></Route>
          <Route path='customer' element={<Customer />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}