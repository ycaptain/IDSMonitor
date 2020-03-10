import * as React from 'react';
import * as Redux from 'react-redux';
import { History, Module } from 'history';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import Routes from '../routes';

interface IRootType {
  store: Redux.Store<any>;
  history: History
};

declare global {
  interface Window {
    load: Function;
    path: any;
  }
}

export default function Root({ store, history }: IRootType) {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </ConfigProvider>
    </Provider>
  );
}
