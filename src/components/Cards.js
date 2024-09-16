import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Cards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("./logements.json").then((res) => setData(res.data));
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
