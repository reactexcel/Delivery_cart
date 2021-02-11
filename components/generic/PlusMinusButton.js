import React from "react";
import { Button } from "reactstrap";

export default function PlusMinusButton({ type, onClick }) {
  const style =
    type === "minus"
      ? {
          margin: "0px 7px 0 0",
        }
      : {
          margin: "0px 7px",
        };
  return (
    <Button
      style={style}
      className="btn-just-icon btn-generic"
      size="sm"
      onClick={onClick}
    >
      {" "}
      <i className={`fa fa-${type}`}></i>
    </Button>
  );
}
