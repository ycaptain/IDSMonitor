import React, { Component } from "react";
import { Card, Row, Col } from "antd";
let styles = require("./Pred.less");
import Figures from "./Figures";
import Timer from "./Timer";
import { remote, ipcRenderer } from "electron";
import Labels from "./Labels";
import Table from "./Table";

export enum MonitorState {
  READY = "准备就绪",
  RUNNING = "检测中",
  PAUSE = "暂停",
  WAIT = "等待载入数据"
}

type State = {
  monitorState: MonitorState;
  isLoading: Boolean;
  time: number;
  results: Array<any>;
};

interface Pred {
  data: Array<any>;
  channel: Array<any>;
  timeouts: Array<any>;
  intervalId: number;
}

class Pred extends Component<any, State> {
  state: State = {
    monitorState: MonitorState.WAIT,
    time: 0,
    isLoading: false,
    results: []
  };

  constructor(props: any) {
    super(props);

    this.setTime = this.setTime.bind(this);
    this.setMonitor = this.setMonitor.bind(this);
    this.loadData = this.loadData.bind(this);
    this.sendData = this.sendData.bind(this);
    this.pauseSend = this.pauseSend.bind(this);
  }

  componentWillMount() {
    console.info("componentWillMount");
    this.data = [];
    this.channel = [];
    this.timeouts = [];
    this.intervalId = 0;
  }

  componentDidMount() {
    console.info("componentDidMount");
    ipcRenderer.on("predict-r", (event, args) => {
      this.setState({
        results: this.state.results.concat(args)
      });
      console.info(args);
    });
  }

  componentWillUnmount() {
    this.timeouts.forEach(tid => clearTimeout(tid));
  }

  // componentDidUpdate() {
  // }

  setTimeout(func: Function, time: number) {
    const id = setTimeout(() => {
      this.timeouts = this.timeouts.filter(tid => tid !== id);
      func();
    }, time);
    this.timeouts.push(id);
    return id;
  }

  clearTimeout(id: number) {
    this.timeouts = this.timeouts.filter(tid => tid !== id);
    clearTimeout(id);
    this.pauseSend();
  }

  pauseSend() {
    clearInterval(this.intervalId);
  }

  setTime(t: number) {
    this.setState({
      time: t
    });
  }

  setMonitor(m: MonitorState) {
    this.setState({
      monitorState: m
    });

    switch (m) {
      case MonitorState.RUNNING:
        break;
      case MonitorState.PAUSE:
        this.pauseSend();
        break;
      case MonitorState.READY:
        this.setState({
          results: []
        });
      default:
        break;
    }
  }

  async loadData() {
    this.setState({
      isLoading: true
    });
    const filePath = window.path.resolve(
      remote.app.getAppPath(),
      "../../resources/tmp.csv"
    );
    const d = await window.load(filePath);
    console.info(d);
    this.data = d.sort(function() {
      return 0.5 - Math.random();
    });
    this.setState({
      isLoading: false,
      monitorState: MonitorState.READY
    });
  }

  transmit(data: Array<number>, dataIdx: string) {
    ipcRenderer.send("predict", data, dataIdx);
  }

  sendData(idx: number) {
    if (!this.data || this.intervalId) {
      console.info("null");
      return null;
    }

    const dataIdx = idx % this.data.length;
    const data = Object.keys(this.data[dataIdx])
      .slice(1)
      .map(k => this.data[dataIdx][k]);
    this.transmit(data, dataIdx.toString());
    return null;
  }

  render() {
    const { monitorState, time, isLoading, results } = this.state;

    return (
      <div style={{ padding: "8px 0px" }}>
        <Row gutter={[16, 16]}>
          <Col span={18}>
            <Card hoverable style={{ width: "100%" }}>
              <Figures data={results} />
            </Card>
          </Col>
          <Col span={6}>
            <Labels />
            <Card hoverable className={styles.data_card}>
              <Timer
                monitorState={monitorState}
                time={time}
                setTime={this.setTime}
                setMonitor={this.setMonitor}
                loadData={this.loadData}
                sendData={this.sendData}
                isLoading={isLoading}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card
              hoverable
              className={styles.data_card}
              bodyStyle={{
                padding: "0px"
              }}
            >
              <Table data={results} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Pred;
