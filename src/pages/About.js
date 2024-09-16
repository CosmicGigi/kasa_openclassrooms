import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Bannerabout from "../components/Bannerabout";
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <div>
      <Header />
      <Bannerabout />
      <div className="collapseabout">
        <Collapse
          title="Fiabilité"
          collapseMenu={false}
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
      </div>
      <div className="collapseabout">
        <Collapse
          title="Respect"
          collapseMenu={false}
          text=" La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
      </div>

      <div className="collapseabout">
        <Collapse
          title="Service"
          collapseMenu={false}
          text="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
        />
      </div>

      <div className="collapseabout">
        <Collapse
          title="Sécurité"
          collapseMenu={false}
          text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
