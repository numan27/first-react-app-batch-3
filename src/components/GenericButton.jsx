import React from "react";
import { Button } from "react-bootstrap";

export const GenericButton = ({ buttonText, buttonMargin }) => {
  return <Button style={{ margin: { buttonMargin } }}>{buttonText}</Button>;
};
