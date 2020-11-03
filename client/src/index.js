import React from "react";
import { render } from "react-dom";
import App from "./App";

const element = document.getElementById("root");

const main = () => {
  return render(<App />, element);
};

main();
