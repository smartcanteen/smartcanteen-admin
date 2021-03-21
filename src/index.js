import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import App from "./App";
import customTheme from "./theme";

ReactDOM.render(
  <ChakraProvider theme={customTheme}>
    <React.StrictMode>
      <CSSReset />
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
