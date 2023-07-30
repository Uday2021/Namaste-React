import React from "react";
import ReactDOM from "react-dom/client";
/** <div id="parent">
 * <div>
 *   <h1>Hello world</h1>
 * </div>
 *</div>;
 *
 * ReactElement(object) => HTML(browser understands)
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello world reactjs h1"),
    React.createElement("h2", {}, "Hello world reactjs h2"),
  ])
);
console.log(parent); //object

// const heading = React.createElement("h1", { id: "heading" }, "Hello world!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
