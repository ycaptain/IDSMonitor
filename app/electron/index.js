const {
  app,
  BrowserWindow,
  Menu,
  shell,
  ipcMain
} = require('electron');

function createWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    webPreferences: {
      nodeIntegration: true,
      preload: path.resolve(__dirname, 'preload.js'),
    }
  });


}
