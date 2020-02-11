import React from "react";

export default function Scroll(props) {
  return (
    <div
      style={{ overflow: "scroll", border: "1px solid #333", height: "100vh" }}
    >
      {props.children}
    </div>
  );
}
