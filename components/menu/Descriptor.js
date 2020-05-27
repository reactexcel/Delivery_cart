import React from "react";
import Separator from "./Separator";

export default function Descriptor({ description }) {
  return (
    <div className="d-flex menu-desc">
      {description.currency}
      <Separator />
      {description.location}
      <Separator />
      {description.type}
      <Separator />
      {description.food}
    </div>
  );
}
