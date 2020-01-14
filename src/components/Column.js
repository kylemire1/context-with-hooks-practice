import React, { useContext } from "react";
import Card from "./Card";
import { ColumnContext } from "../context/ColumnContext";

const Column = ({ color, title, columnId, cards, position }) => {
  const [state, dispatch] = useContext(ColumnContext);

  const handleClick = id => {
    const cardText = window.prompt("Enter card text");
    if (cardText) dispatch({ type: "CARD_ADD", text: cardText, id });
  };

  return (
    <div className='column'>
      <div
        style={{ background: color, color: "white" }}
        className='column-title'
      >
        <span>{title}</span>
      </div>
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          text={card.text}
          columnId={columnId}
          position={position}
        />
      ))}
      <button onClick={() => handleClick(columnId)}>Add a Card</button>
    </div>
  );
};

export default Column;
