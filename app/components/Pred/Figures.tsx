import React, { PureComponent } from "react";
import { Chart, Geom, Axis, Tooltip, Legend, Guide } from "bizcharts";

// 定义度量
const cols = {
  timestamp: { alias: "时间" },
  loss: { alias: "异常指数", min: -0.5, max: 1.6 }
};

const label: any = {
  rotate: -30, // 文本旋转角度
  // 设置文本的显示样式，还可以是个回调函数，回调函数的参数为该坐标轴对应字段的数值
  textStyle: {
    textAlign: "center", // 文本对齐方向，可取值为： start center end
    // fill: "#404040", // 文本的颜色
    fontSize: "12", // 文本大小
    // fontWeight: "bold", // 文本粗细
    textBaseline: "top" // 文本基准线，可取 top middle bottom，默认为middle
  },
  autoRotate: true, // 文本是否需要自动旋转，默认为 true
  /**
   * 用于格式化坐标轴上显示的文本信息的回调函数
   * @param  {string} text  文本值
   * @param  {object} item  该文本值对应的原始数据记录
   * @param  {number} index 索引值
   * @return {string}       返回格式化后的文本值
   */
  formatter(text: string, item: any, index: number) {
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

    return formattedTime;
  }
};

const { Line } = Guide;
class Figures extends PureComponent<any, any> {
  render() {
    console.info("Figures");

    return (
      <Chart
        width={500}
        height={315}
        data={this.props.data}
        forceFit
        padding="auto"
        scale={cols}
      >
        <Axis name="timestamp" title label={label} />
        <Axis name="loss" title />
        <Legend position="top" />
        <Tooltip />
        <Guide>
          <Line start={["min", 0.6]} end={["max", 0.6]} />
        </Guide>
        <Geom
          type="line"
          position="timestamp*loss"
          shape="smooth"
          color={`l (270) 0:rgba(47,194,91,1) 0.5:rgba(206,241,141,1) 1:rgba(255,0,0,1)`}
        />
      </Chart>
    );
  }
}

export default Figures;
