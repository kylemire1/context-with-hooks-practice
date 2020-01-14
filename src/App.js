import React from "react";
import "./App.css";

import { ColumnContextProvider } from "./context/ColumnContext";
import ColumnApp from "./components/ColumnApp";

function App() {
  return (
    <ColumnContextProvider>
      <ColumnApp />
    </ColumnContextProvider>
  );
}

export default App;
