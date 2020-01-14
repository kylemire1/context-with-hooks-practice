import React, { useContext } from "react";
import { ColumnContext } from "../context/ColumnContext";

const Card = ({ text, position, id, columnId }) => {
  const [state, dispatch] = useContext(ColumnContext);

  const handleClick = (id, columnId, direction) => {
    dispatch({ type: "CARD_MOVE", cardId: id, columnId, direction });
  };

  return (
    <div className='card'>
      {position !== "first" ? (
        <button onClick={() => handleClick(id, columnId, "left")}>
          &larr;
        </button>
      ) : (
        <span></span>
      )}

      <p>{text}</p>
      {position !== "last" ? (
        <button onClick={() => handleClick(id, columnId, "right")}>
          &rarr;
        </button>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Card;
