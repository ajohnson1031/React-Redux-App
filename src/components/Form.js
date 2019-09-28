import React from "react";
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Form = ({ state, updateHero, loadHero }) => {
  return (
    <>
      <h1>Superhero/Supervillain Search Engine</h1>
      <form action="">
        <input
          type="text"
          name="hero"
          value={state.hero}
          placeholder="Enter desired hero name..."
          onChange={e => updateHero(e.target.value)}
        />
        <button onClick={(e, hero) => loadHero(e, state.hero)}>
          <Icon name="search"></Icon>
        </button>
      </form>
    </>
  );
};

export default Form;
