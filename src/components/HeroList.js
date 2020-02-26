import React from "react";
import HeroItem from "components/HeroItem";

const HeroList = ({ herodata }) => {
  return (
    <div className="herolist-container">
      {herodata && herodata.map(hero => <HeroItem key={hero.id} hero={hero} />)}
    </div>
  );
};

export default HeroList;
