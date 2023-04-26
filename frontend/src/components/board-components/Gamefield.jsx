import React, { useState, useEffect } from "react";
import Field from "./Field";
import Hand from "./Hand";

function Gamefield() {
  const [cardList, setCardList] = useState([]);
  const [cardOnField, setCardOnField] = useState([]);
  const [cardSelect, setCardSelect] = useState(0);

  const changeCardSelect = (idCard) => {
    setCardSelect(idCard);
  };
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < cardList.length; i += 1) {
          Object.defineProperty(data[i], "id", { value: i });
        }
        setCardList(data.slice(0, 5));
        console.info(cardList);
      });
  }, []);

  const putCardOnField = (cardid) => {
    setCardOnField(cardList.slice(cardid, cardid + 1));
    console.info(cardid);
  };

  return (
    <div className="game-field">
      <Hand
        cardList={cardList}
        putCardOnField={putCardOnField}
        cardSelect={cardSelect}
        changeCardSelect={changeCardSelect}
      />
      <Field
        cardOnField={cardOnField}
        putCardOnField={putCardOnField}
        cardSelect={cardSelect}
        changeCardSelect={changeCardSelect}
      />
      <Hand
        cardList={cardList}
        putCardOnField={putCardOnField}
        cardSelect={cardSelect}
        changeCardSelect={changeCardSelect}
      />
    </div>
  );
}

export default Gamefield;
