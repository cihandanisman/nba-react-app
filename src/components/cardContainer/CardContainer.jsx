import React, { useState } from "react";
import PlayerCard from "../Card/PlayerCard";
import '../Header/header.scss'


const CardContainer = () => {
  
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setInput(inputValue);
  };
  return (
    <div>
      <div className="input">
        <input
          className="input-inside"
          onChange={handleChange}
          type="text"
          placeholder="Search Player.."
        />
        <div className="player-body">
            <PlayerCard input ={input}/>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
