import React from "react";
import Pred from "../components/Pred";
import { Link } from "react-router-dom";
import { Layout } from "antd";
const { Content, Header } = Layout;
import { LeftOutlined } from "@ant-design/icons";
import classnames from "classnames";

const styles = require("./PredPage.less");

const PredPage = (): JSX.Element => {
  return (
    <Layout>
      <Header className={styles.header}>
        <Link className={classnames(styles.back_button, "c_pointer")} to="/">
          <LeftOutlined />
        </Link>
      </Header>
      <Content className={styles.content}>
        <Pred />
      </Content>
    </Layout>
  );
};

export default PredPage;
