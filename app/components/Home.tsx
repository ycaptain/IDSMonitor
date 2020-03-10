import React from "react";
import { Link } from "react-router-dom";
let styles = require("./Home.less");

const Home = (): JSX.Element => {

  return (
    <div>
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to="/pred">To Pred</Link>
      </div>
    </div>
  );
};

export default Home;
