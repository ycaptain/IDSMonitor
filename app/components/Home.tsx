import React, { useState } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import {ipcRenderer} from 'electron';
let styles = require('./Home.less');

const Home = (): JSX.Element => {



  ipcRenderer.on('predict-r', (event, arg) => {
    console.info(arg);
  })
  console.info('render');

  return (
    <div>
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to="/pred">
          To Pred
        </Link>
        <Button onClick={() => {
            ipcRenderer.send('predict');
        }}>Test</Button>
      </div>
    </div>
  )
}

export default Home;
