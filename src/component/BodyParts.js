import React from "react";
import gym from "../assets/icons/gym.png";
import "./BodyParts.css"

function BodyParts({ item }) {
  return (
    <div className="bodyparts">
      <img src={gym} alt="gym" />
      <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
    </div>
  );
}

export default BodyParts;
