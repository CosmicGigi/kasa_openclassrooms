import React, { useEffect, useState } from "react";
import Card from "./Card";
import logements from "../data/logements.json";

const Cards = () => {
  const [data, setData] = useState(logements);
  useEffect(() => {
    setData(logements);
  }, []);

  return (
    <div>
      <div className="cards-container">
        {data.map((card, i) => (
          <Card
            key={i}
            logementId={card.id}
            logementTitle={card.title}
            logementCover={card.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
