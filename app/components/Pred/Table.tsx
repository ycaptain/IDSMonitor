import React from "react";
import { Table as AntTable, Tag } from "antd";

type ThreatLevel = {
  text: string;
  range: Array<number>;
  color: string;
};

const Threat: any = {
  SAFE: {
    text: "安全",
    range: [0, 0.4],
    color: "green"
  },
  LOW: {
    text: "疑似",
    range: [0.4, 0.6],
    color: "green"
  },
  ABNORMAL: {
    text: "异常",
    range: [0.6, 1.2],
    color: "gold"
  },
  HIGH: {
    text: "高危",
    range: [1.2, 100],
    color: "red"
  }
};

const columns = [
  {
    title: "时间",
    dataIndex: "timestamp",
    key: "timestamp",
    render: (text: any) => {
      var date = new Date(parseInt(text));
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

    return <a>{formattedTime}</a>;
    },
    sorter: (a: any, b: any) => a.timestamp - b.timestamp,
  },
  {
    title: "异常指数",
    dataIndex: "loss",
    key: "loss",
    render: (loss: String) => (
      <span>{Math.round(Number(loss) * 10000) / 10000}</span>
    ),
    sorter: (a: any, b: any) => a.loss - b.loss,
  },
  {
    title: "异常类型",
    dataIndex: "type",
    key: "type",
    sorter: (a: any, b: any) => a.type - b.type,
    render: (type: number) => {
      if (type === 0) {
        return '';
      }
      return `IDX(${type})`;
    }
  },
  {
    title: "安全等级",
    key: "loss",
    dataIndex: "loss",
    filters: Object.keys(Threat).map((k: any) => ({
      text: Threat[k]["text"],
      value: Threat[k]["range"]
    })),
    sorter: (a: any, b: any) => a.loss - b.loss,
    onFilter: (value: any, record: any) =>
      record.loss < value[1] && record.loss >= value[0],
    render: (loss: String) => {
      let tag: ThreatLevel;
      const abLoss = Math.abs(Number(loss));
      if (abLoss < Threat.SAFE.range[1]) {
        tag = Threat.SAFE;
      } else if (abLoss < Threat.LOW.range[1]) {
        tag = Threat.LOW;
      } else if (abLoss < Threat.ABNORMAL.range[1]) {
        tag = Threat.ABNORMAL
      } else {
        tag = Threat.HIGH;
      }

      return <Tag color={tag.color}>{tag.text.toUpperCase()}</Tag>;
    }
  }
];

type Props = {
  data: Array<any>;
};

const Table = (props: Props) => (
  <AntTable
    columns={columns}
    dataSource={props.data}
    pagination={{ position: "top" }}
    scroll={{ y: 170, scrollToFirstRowOnChange: true }}
  />
);

export default Table;
