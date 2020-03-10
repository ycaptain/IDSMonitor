const {
  predict
} = require('../api/client');
const path = require('path');
const {
  ipcMain
} = require('electron');
const {
  spawn
} = require('child_process');

console.info('load ipc');


ipcMain.on('predict', (event, arg, timestamp) => {
  (async () => {
    try {
      const a = await predict(arg, timestamp);
      console.info('Main process: predict');
      console.info(a);
      event.reply('predict-r', a);
    } catch (e) {
      console.error(e);
    }
  })();
});
