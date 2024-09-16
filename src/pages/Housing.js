import React from "react";
import { Navigate, useParams } from "react-router-dom";
import data from "../data/logements.json";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

const Tag = ({ text }) => <div className="housing__tag">{text}</div>;

const Host = ({ name, picture }) => {
  const [firstName, lastName] = name.split(" ");
  return (
    <div className="housing__host">
      <div className="housing__host-name">
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
      <div className="housing__host-picture">
        <img src={picture} alt={name} />
      </div>
    </div>
  );
};

const Housing = () => {
  const { id } = useParams();
  const housing = data.find((card) => card.id === id);

  if (!housing) {
    return <Navigate to={"*"} />;
  }

  const { title, location, tags, host, rating, description, equipments } =
    housing;

  return (
    <div className="housing">
      <Header />
      <Slideshow id={id} />
      <div className="housing__content">
        <div className="housing__info">
          <h1 className="housing__title">{title}</h1>
          <p className="housing__location">{location}</p>
          <div className="housing__tags">
            {tags.map((tag, i) => (
              <Tag key={i} text={tag} />
            ))}
          </div>
        </div>
        <div className="housing__details">
          <Host name={host.name} picture={host.picture} />
          <div className="housing__rating">
            <Rating rating={rating} />
          </div>
        </div>
      </div>
      <div className="housing__collapses">
        <Collapse title="Description" text={description} />
        <Collapse
          title="Équipements"
          text={
            <ul>
              {equipments.map((equipment, i) => (
                <li key={i}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default Housing;
