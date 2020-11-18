import React from "react";
import { Badge } from "react-bootstrap";

const myBadge = (props) => {
  return <Badge variant={props.color}>{props.text}</Badge>;
};
export default myBadge;
