import React from "react";

const warning = (props) => {
  return <p style={{ color: props.color }}>{props.text}</p>;
};

export default warning;
