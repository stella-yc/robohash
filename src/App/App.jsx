import React from "react";

import { Header } from "../components/Header/Header";
import { RobohashForm } from "../components/RobohashForm/RobohashForm";
import styles from "./App.module.css";

export const App = () => (
  <div className={styles.app}>
    <Header />
    <body>
      <div>
        <RobohashForm />
      </div>
    </body>
  </div>
);
