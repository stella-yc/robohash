import React from "react";

import { TextInput } from "../components/TextInput/TextInput";
import styles from "./App.module.css";

export const App = () => (
  <div className={styles.app}>
    <header className="App-header" />
    <body>
      <div>
        <TextInput />
      </div>
    </body>
  </div>
);
