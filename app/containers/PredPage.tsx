import React, { useState } from "react";
import Pred from "../components/Pred";
import { Link } from "react-router-dom";
import { Layout, Radio, Button } from "antd";
import constants from "../utils/constants";
const { Content, Header } = Layout;
import { LeftOutlined } from "@ant-design/icons";
import classnames from "classnames";

const styles = require("./PredPage.less");

const PredPage = (): JSX.Element => {
  const [mode, setMode] = useState(constants.MODE_PRED);
  const [data, setData] = useState<Array<any>>([]);

  return (
    <Layout>
      <Header className={styles.header}>
        <Link className={classnames(styles.back_button, "c_pointer")} to="/">
          <LeftOutlined />
        </Link>
        <Radio.Group
          className={styles.mode_header}
          value={mode}
          onChange={e => setMode(e.target.value)}
        >
          <Radio.Button value={constants.MODE_PRED}>
            {constants.MODE_PRED}
          </Radio.Button>
          {/* <Radio.Button value={constants.MODE_TRAIN}>
            {constants.MODE_TRAIN}
          </Radio.Button> */}
        </Radio.Group>
      </Header>
      <Content className={styles.content}>
        <Pred data={data} />
      </Content>
    </Layout>
  );
};

export default PredPage;
