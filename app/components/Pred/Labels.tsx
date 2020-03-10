import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Statistic, Card} from "antd";
let styles = require("./Pred.less");

const Labels = React.memo(() => {
  console.info("labels");

  return (
    <>
      <Card hoverable className={styles.data_card}>
        <Statistic
          title="异常率"
          value={0.05}
          precision={2}
          valueStyle={{ color: "#3f8600" }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
      <Card hoverable className={styles.data_card}>
        <Statistic
          title="隐患问题个数"
          value={56}
          valueStyle={{ color: "#cf1322" }}
          prefix={<ArrowUpOutlined />}
        />
      </Card>
    </>
  );
});

export default Labels;
