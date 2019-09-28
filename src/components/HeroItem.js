import React from "react";
import { Card, Header, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const HeroItem = ({ hero }) => {
  return (
    <Card className="hero-item">
      <Card.Content className="hero-image">
        <Image src={hero.image.url} alt={hero.name} />
        <Card.Meta
          className={hero.biography.alignment === "good" ? "good" : "bad"}
        >
          <ul>
            <li>
              <strong>Name:</strong> {hero.name}
            </li>
            <li>
              <strong>Alignment:</strong>{" "}
              {hero.biography.alignment === "good" ? "Hero" : "Villian"}
            </li>
            <li>
              <strong>Secret Identity:</strong> {hero.biography["full-name"]}
            </li>
            <li>
              <strong>Aliases:</strong> <br />
              {hero.biography.aliases.map((alias, i) => (
                <p key={i}> {alias}</p>
              ))}
            </li>
          </ul>
        </Card.Meta>
      </Card.Content>
      <Card.Content className="hero-stats">
        <Header as="h3" className="affiliations">
          Affiliation(s):
        </Header>
        <ul className="affiliations">
          <li>
            {" "}
            <strong>Publisher: </strong>
            {hero.biography.publisher}
          </li>
          <li>
            <strong>Groups: </strong>
            {hero.connections["group-affiliation"] === "-"
              ? "None"
              : hero.connections["group-affiliation"]
                  .split(",")
                  .map((affiliation, i) => <p key={i}>{affiliation}</p>)}
          </li>
        </ul>
        <Header as="h3" className="appearance">
          Appearance:
        </Header>
        <ul className="appearance">
          <li>
            <strong>Gender:</strong> {hero.appearance.gender}
          </li>
          <li>
            <strong>Race:</strong> {hero.appearance.race}
          </li>
          <li>
            <strong>Height:</strong> {hero.appearance.height}
          </li>
          <li>
            <strong>Weight:</strong> {hero.appearance.weight[0]}
          </li>
          <li>
            <strong>Eye Color:</strong> {hero.appearance["eye-color"]}
          </li>
          <li>
            <strong>Hair Color:</strong> {hero.appearance["hair-color"]}
          </li>
        </ul>
        <Header as="h3" className="power-stats">
          Power Stats:
        </Header>
        <ul className="power-stats">
          <li>
            <strong>Intelligence</strong> {hero.powerstats.intelligence}
          </li>
          <li>
            <strong>Strength</strong> {hero.powerstats.strength}
          </li>
          <li>
            <strong>Speed</strong> {hero.powerstats.speed}
          </li>
          <li>
            <strong>Durability</strong> {hero.powerstats.durability}
          </li>
          <li>
            <strong>Power</strong> {hero.powerstats.power}
          </li>
          <li>
            <strong>Combat</strong> {hero.powerstats.combat}
          </li>
        </ul>
      </Card.Content>
    </Card>
  );
};

export default HeroItem;
