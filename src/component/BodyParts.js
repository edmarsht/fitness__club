import React from "react";
import gym from "../assets/icons/gym.png";
import "./BodyParts.css";

function BodyParts({ item, setBodyPart, bodyPart }) {
  return (
    <div
      className={(bodyPart === item) ? "bodyparts activebodyparts" : "bodyparts"}
      type="button"
      onClick={() => {
        setBodyPart(item);
      }}
    >
      <img src={gym} alt="gym" />
      <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
    </div>
  );
}

export default BodyParts;
