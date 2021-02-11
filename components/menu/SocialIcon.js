import React from "react";

export default function SocialIcon({icon}) {
  return (
    <div
      style={{
        backgroundColor: "#888",
        borderRadius: "50%",
        textAlign: "center",
      }}
      className="social-logo"
    >
      <img width="10" src={icon} />
    </div>
  );
}
