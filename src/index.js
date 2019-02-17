import React from "react";
import ReactDOM from "react-dom";
import Loading from "Commons/Loading";
import DynamicImport from "Features/DynamicImport/DynamicImport";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <DynamicImport
    load={() => import("Components/App/App")}
    render={Comp => (Comp === null ? <Loading /> : <Comp />)}
  />,
  document.getElementById("root")
);

serviceWorker.unregister();
