import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Goods from "./goods/Goods";
import Customer from "./customer/Customer";
import styles from "./app.scss";


const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' caseSensitive element={<Home />}>
          <Route path='goods' element={<Goods />}></Route>
          <Route path='customer' element={<Customer />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;