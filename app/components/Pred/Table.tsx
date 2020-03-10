import React from "react";
import { Table as AntTable, Tag } from "antd";


type ThreatLevel = {
  text: string,
  range: Array<number>,
  color: string,
}

const Threat: any = {
  SAFE: {
    text: '安全',
    range: [0, 0.3],
    color: 'green'
  },
  LOW: {
    text: '低危',
    range: [0.3, 0.5],
    color: 'green'
  },
  HIGH: {
    text: '高危',
    range: [0.5, 0.8],
    color: 'volcano'
  },
  ABNORMAL: {
    text: '异常',
    range: [0.8, 100],
    color: 'red'
  },

}

const columns = [
  {
    title: "Time",
    dataIndex: "timestamp",
    key: "timestamp",
    render: (text: any) => <a>{text}</a>,

  },
  {
    title: "Loss",
    dataIndex: "loss",
    key: "loss",
    render: (loss: String) => (<span>{Math.round(Number(loss) * 10000) / 10000}</span>)
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type"
  },
  {
    title: "level",
    key: "loss",
    dataIndex: "loss",
    filters: Object.keys(Threat).map((k: any) => ({text: Threat[k]['text'], value: Threat[k]['range']})),
    onFilter: (value: any, record: any) => record.loss < value[1] && record.loss >= value[0],
    render: (loss: String) => {
      let tag: ThreatLevel;
      const abLoss = Math.abs(Number(loss));
      if (abLoss < Threat.SAFE.range[1]) {
        tag = Threat.SAFE;
      } else if (abLoss < Threat.LOW.range[1]) {
        tag = Threat.LOW;
      } else if (abLoss < Threat.SAFE.range[1]) {
        tag = Threat.HIGH;
      } else {
        tag = Threat.ABNORMAL;
      }

      return (
        <Tag color={tag.color}>
          {tag.text.toUpperCase()}
        </Tag>
      );
    }
  },
];

type Props = {
  data: Array<any>;
}

const Table = (props: Props) => <AntTable columns={columns} dataSource={props.data} pagination={{position: 'top'}} scroll={{y: 1240, scrollToFirstRowOnChange: true}} />;

export default Table;
