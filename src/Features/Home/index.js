import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>vendor directory</p>
    
  </div>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push("/login")
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Home);
