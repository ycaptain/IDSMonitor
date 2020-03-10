import React, { useEffect } from "react";
import { Statistic, Button } from "antd";
import {
  PauseOutlined,
  BorderOutlined,
  CaretRightOutlined,
  DownloadOutlined,
  LoadingOutlined
} from "@ant-design/icons";
import { MonitorState } from "./";

interface ICounter {
  monitorState: MonitorState;
  time: number;
  setTime: Function;
  setMonitor: Function;
  loadData: Function;
  sendData: Function;
  isLoading: Boolean;
}

const Timer = (props: ICounter) => {
  const { monitorState, time, setTime, setMonitor, loadData, sendData, isLoading } = props;
  useEffect(() => {
    if (monitorState === MonitorState.RUNNING) {
      const timeout = setTimeout(() => {
        setTime(time + 1);
        (async () => {
          const idx = Math.floor(time);
          if (time - idx < 0.01) {
            sendData(idx);
          }
        })();
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
    return () => {};
  }, [monitorState, time]);

  let icon;
  let newMonitorState: MonitorState = monitorState;

  switch (monitorState) {
    case MonitorState.WAIT:
      if (isLoading) {
        icon = <LoadingOutlined/>;
      } else {
        icon = <DownloadOutlined />;
      }

      break;
    case MonitorState.READY:
      icon = <CaretRightOutlined />;
      newMonitorState = MonitorState.RUNNING;
      break;
    case MonitorState.RUNNING:
      icon = <PauseOutlined />;
      newMonitorState = MonitorState.PAUSE;
      break;
    case MonitorState.PAUSE:
      icon = <CaretRightOutlined />;
      newMonitorState = MonitorState.RUNNING;
      break;
    default:
      break;
  }

  const play = () => {
    if (monitorState === MonitorState.WAIT) {
      loadData();
    }

    setMonitor(newMonitorState);
  };

  return (
    <div style={{ display: "flex" }}>
      <Statistic
        title={monitorState}
        value={time && `${time} 秒`}
        style={{ minWidth: "150px" }}
      />
      <Button
        size="large"
        shape="circle"
        icon={icon}
        style={{ top: "25px", marginRight: "10px" }}
        onClick={play}
      />
      {time ? (
        <Button
          size="large"
          shape="circle"
          icon={<BorderOutlined />}
          style={{ top: "25px" }}
          onClick={() => {
            setTime(0);
            setMonitor(MonitorState.READY);
          }}
        />
      ) : null}
    </div>
  );
};

export default Timer;
