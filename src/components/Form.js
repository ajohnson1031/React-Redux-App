import React from "react";
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Form = ({ state, toggleURL, updateHero, loadHero }) => {
  return (
    <>
      <h1>Superhero/villian Search Engine</h1>
      <form action="">
        <input
          type="text"
          name="hero"
          value={state.hero}
          placeholder="Enter desired character name..."
          onChange={e => updateHero(e.target.value)}
        />
        <button onClick={(e, hero) => loadHero(e, state.hero)}>
          <Icon name="search"></Icon>
        </button>
        <span onClick={e => toggleURL(state.url)}>{state.url}</span>
      </form>
    </>
  );
};

export default Form;
