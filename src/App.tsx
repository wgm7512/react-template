import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router/routes";
import styles from "./app.scss";


export default function App() {
  return (
    <div className={styles["app"]}>
      {
        useRoutes(routes)
      }
    </div>
  );
}