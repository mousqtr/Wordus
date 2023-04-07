import React from "react";
import Game from "./Game/Game";

// Import style
import "./CardGame.scss";

export default function CardGame() {
  const stage = "game";
  return <div id="cardGame">{stage === "game" ? <Game /> : <></>}</div>;
}
