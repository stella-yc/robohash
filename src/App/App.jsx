import React from "react";

import { Header } from "../components/Header/Header";
import { Robohasher } from "../components/Robohasher/Robohasher";
import styles from "./App.module.css";

export const App = () => (
  <div className={styles.app}>
    <Header />
    <div>
      <Robohasher />
    </div>
  </div>
);
