import React, { useState } from 'react';
import Pred from '../components/Pred';
import { Link } from 'react-router-dom';
import { Layout, Radio } from 'antd';
import constants from '../utils/constants';
const { Sider, Content, Header } = Layout;

const styles = require('./PredPage.less');

const PredPage = (): JSX.Element => {
  const [ mode, setMode ] = useState(constants.MODE_PRED);

  return (
    <Layout>
      <Sider
        style={{height: '100vh'}}
        collapsible
        className={styles.container}>
        <Link to="/">To Home</Link>
      </Sider>
      <Layout>
        <Header className={styles.mode_header}>
          <Radio.Group value={mode} onChange={e => setMode(e.target.value)}>
            <Radio.Button value={constants.MODE_PRED}>
              {constants.MODE_PRED}
            </Radio.Button>
            <Radio.Button value={constants.MODE_TRAIN}>
              {constants.MODE_TRAIN}
            </Radio.Button>
          </Radio.Group>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Pred />
          </Content>
      </Layout>
    </Layout>
  );
}

export default PredPage;
