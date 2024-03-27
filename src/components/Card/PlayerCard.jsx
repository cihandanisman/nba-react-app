import React, { useState } from "react";
import { data } from "../../helper/data";
import "./Player.scss";
import { FaBasketballBall } from "react-icons/fa";

const PlayerCard = ({ input }) => {
  const [toggle, setToggle] = useState(Array(data.length).fill(true));

  const handleToggle = (index) => {
    const newToggle = [...toggle];
    newToggle[index] = !newToggle[index];
    setToggle(newToggle);
  };
  return (
    <div className="player-card">
      {data
        .filter((item) => item.name.toLowerCase().includes(input.trim()))
        .map((player, index) => (
          <div
            className="player-image"
            onClick={() => handleToggle(index)}
            key={index}
          >
            {toggle[index] ? (
              <div className="image">
                <img src={player.img} alt={player.name} />
                <p>{player.name}</p>
              </div>
            ) : (
              <div className="statistics">
                {player.statistics.map((stat, statIndex) => (
                  <p key={statIndex}>
                    <FaBasketballBall size={"1rem"} color="#1D4289" /> {stat}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default PlayerCard;

// const PlayerCard = () => {
//   const [toggle, SetToggle] = useState(true);

//   return (
//     <div className="player-body">
//       <div className="player-card">
//         {data.map((player, index) => (
//           <div
//             className="player-image"
//             onClick={() => SetToggle(!toggle)}
//             key={index}
//           >
//             {toggle ? (
//               <div className="image">
//                 <img src={player.img} alt={player.name} />
//                 <p>{player.name}</p>
//               </div>
//             ) : (
//               <div className="statistics">
//                 {player.statistics.map((stat, statIndex) => (
//                   <p key={statIndex}><FaBasketballBall size={"1rem"} color="#1D4289"/> {stat}</p>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
