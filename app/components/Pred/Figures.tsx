import React, { PureComponent } from "react";
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";

// 数据源

const defaultData = [
  { timestamp: "00:08", loss: 1 },
  { timestamp: "00:09", loss: 2.452152 },
  { timestamp: "00:10", loss: 3.412352 },
  { timestamp: "00:11", loss: 4.4112412 },
  { timestamp: "00:12", loss: 2.41235232 },
  { timestamp: "00:13", loss: 2.4112412 },
  { timestamp: "00:14", loss: 2.41241212 },
  { timestamp: "00:15", loss: 2.41135132 },
  { timestamp: "00:09", loss: 2.31512 },
  { timestamp: "00:10", loss: 2.41215 },
  { timestamp: "00:11", loss: 2.235412 },
  { timestamp: "00:08", loss: 2.4235112 },
  { timestamp: "00:09", loss: 2.4135112 },
  { timestamp: "00:10", loss: 2.431512 },
  { timestamp: "00:11", loss: 2.413512 }
];

// 定义度量
const cols = {
  timestamp: { alias: "时间" },
  loss: { alias: "游戏种类" }
};

class Figures extends PureComponent<any, any> {
  render() {
    console.info("Figures");
    const data = this.props.data || defaultData;

    return (
      <Chart width={500} height={315} data={data} forceFit padding="auto">
        <Axis name="timestamp" title />
        <Axis name="loss" title />
        <Legend position="top" />
        <Tooltip />
        <Geom type="line" position="timestamp*loss" shape="smooth" />
      </Chart>
    );
  }
}

export default Figures;
