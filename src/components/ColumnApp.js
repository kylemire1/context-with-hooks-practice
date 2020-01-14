import React, { useContext } from "react";
import Column from "./Column";
import { ColumnContext } from "../context/ColumnContext";

const ColumnApp = () => {
  const [state, dispatch] = useContext(ColumnContext);
  console.log(state);
  return (
    <div className='app'>
      <div className='column-container'>
        {state.columns.map((column, i) => {
          let position =
            i === 0
              ? "first"
              : i === state.columns.length - 1
              ? "last"
              : "middle";
          return (
            <Column
              key={column.id}
              color={column.color}
              title={column.title}
              columnId={column.id}
              cards={column.cards}
              position={position}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ColumnApp;
