import React from "react";
import { Alert } from "react-bootstrap";
const warning = (props) => {
  return <Alert variant={props.variant}>{props.text}</Alert>;
};

export default warning;
