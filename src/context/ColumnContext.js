import React, { createContext, useReducer } from "react";
import uuid from "uuid";

export const ColumnContext = createContext();

const ColumnReducer = (state, action) => {
  switch (action.type) {
    case "CARD_ADD":
      return {
        columns: state.columns.map(column => {
          if (column.id === action.id) {
            return {
              ...column,
              cards: [
                ...column.cards,
                {
                  id: uuid.v4(),
                  text: action.text
                }
              ]
            };
          } else return column;
        })
      };

    case "CARD_MOVE":
      let movedCard = null;
      let toIndex = null;
      //Find the card we're trying to move. Filter it from the columns and store it.
      const tempColumns = state.columns.map((column, i) => {
        if (column.id === action.columnId) {
          return {
            ...column,
            cards: column.cards.filter(card => {
              if (card.id !== action.cardId) {
                return card;
              } else {
                movedCard = card;
                toIndex = action.direction === "left" ? i - 1 : i + 1;
              }
            })
          };
        } else return column;
      });
      //Return columns with the moved card added to the correct column
      return {
        columns: tempColumns.map((column, i) => {
          if (i === toIndex) {
            return {
              ...column,
              cards: [...column.cards, { ...movedCard }]
            };
          } else return column;
        })
      };

    default:
      return state;
  }
};

const INITIAL_STATE = {
  columns: [
    {
      id: uuid.v4(),
      title: "Winnie",
      color: "#8E6E95",
      cards: [
        {
          id: uuid.v4(),
          text: "Buy eggs from the grocery store. Need at least two dozen"
        },
        {
          id: uuid.v4(),
          text: "Return text books to campus bookstore. They are defective."
        }
      ]
    },
    {
      id: uuid.v4(),
      title: "Bob",
      color: "#39A59C",
      cards: [
        {
          id: uuid.v4(),
          text: "Card 1 column 2"
        },
        {
          id: uuid.v4(),
          text: "Card 2 column 2"
        }
      ]
    },
    {
      id: uuid.v4(),
      title: "Thomas",
      color: "#344759",
      cards: [
        {
          id: uuid.v4(),
          text: "Card 1 column 3"
        },
        {
          id: uuid.v4(),
          text: "Card 2 column 3"
        }
      ]
    },
    {
      id: uuid.v4(),
      title: "George",
      color: "#E8741E",
      cards: [
        {
          id: uuid.v4(),
          text: "Card 1 column 4"
        },
        {
          id: uuid.v4(),
          text: "Card 2 column 4"
        }
      ]
    }
  ]
};

export const ColumnContextProvider = ({ children }) => (
  <ColumnContext.Provider value={useReducer(ColumnReducer, INITIAL_STATE)}>
    {children}
  </ColumnContext.Provider>
);
