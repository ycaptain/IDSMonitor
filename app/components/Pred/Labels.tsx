import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Statistic, Card } from "antd";
let styles = require("./Pred.less");

type Props = {
  faultNum: number;
  faultProb: number;
}

const Labels = React.memo((props: Props) => {
  console.info("labels");
  const {
    faultNum,
    faultProb
  } = props;

  return (
    <>
      <Card
        hoverable
        className={styles.data_card}
      >
        <Statistic
          title="异常率"
          value={faultProb.toFixed(2)}
          precision={2}
          valueStyle={{ color: "#3f8600" }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
      <Card
        hoverable
        className={styles.data_card}
      >
        <Statistic
          title="隐患问题个数"
          value={faultNum}
          valueStyle={{ color: "#cf1322" }}
          prefix={<ArrowUpOutlined />}
        />
      </Card>
    </>
  );
});

export default Labels;
