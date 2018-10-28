import React from "react";

import { Header } from "../components/Header/Header";
import { TextInput } from "../components/TextInput/TextInput";
import styles from "./App.module.css";

export const App = () => (
  <div className={styles.app}>
    <Header />
    <body>
      <div>
        <TextInput />
      </div>
    </body>
  </div>
);
