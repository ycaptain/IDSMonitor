import React from "react";
import { Link } from "react-router-dom";
let styles = require("./Home.less");

const Home = (): JSX.Element => {

  return (
    <div>
      <div className={styles.container} data-tid="container">
      <h2 style={{ color: "#3D89FF", fontSize: '36px' }}>工业控制系统安全智能监测分析平台</h2>
        <Link to="/pred">START</Link>
      </div>
    </div>
  );
};

export default Home;
