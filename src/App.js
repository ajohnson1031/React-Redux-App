import React from "react";
import { connect } from "react-redux";
import { loadHero, updateHero } from "actions";
import Form from "components/Form";

function App({ state, loadHero, updateHero }) {
  return (
    <div className="App">
      <Form state={state} loadHero={loadHero} updateHero={updateHero} />
    </div>
  );
}

const mapStateToProps = state => ({ state: state });

export default connect(
  mapStateToProps,
  { loadHero, updateHero }
)(App);
