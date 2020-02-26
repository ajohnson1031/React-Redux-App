import React from "react";
import { connect } from "react-redux";
import { toggleURL, loadHero, updateHero } from "actions";
import Form from "components/Form";
import HeroList from "components/HeroList";

function App({ state, toggleURL, loadHero, updateHero }) {
  return (
    <div className="App">
      <Form
        state={state}
        loadHero={loadHero}
        updateHero={updateHero}
        toggleURL={toggleURL}
      />
      {state.err && <div className="err">{state.err}</div>}
      <HeroList herodata={state.heroData} />
    </div>
  );
}

const mapStateToProps = state => ({ state: state });

export default connect(
  mapStateToProps,
  { toggleURL, loadHero, updateHero }
)(App);
