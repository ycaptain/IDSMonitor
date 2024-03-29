const {
  app,
  BrowserWindow,
  Menu,
  shell,
  ipcMain
} = require('electron');

const path = require('path');

let menu;
let template;
let mainWindow = null;
let pyProc = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (process.env.NODE_ENV === 'development') {
  require('electron-debug')();
  const path = require('path');
  const p = path.join(__dirname, '..', 'app', 'node_modules');
  require('module').globalPaths.push(p);
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

const installExtensions = () => {
  if (process.env.NODE_ENV === 'development') {
    const extensions = [
      // TODO Error: React DevTools can only be installed from an renderer process.
      // 'electron-react-devtools',
      // 'electron-redux-devtools'
    ];

    return Promise.all(extensions.map(name => require(name).install()))
      .catch(console.log);
  }

  return Promise.resolve([]);
};

const createPyProc = () => {
  const script = path.join(__dirname, '../../ids', 'server.py');
  const { spawn } = require('child_process');

  pyProc = spawn('/Users/yaochenzhen/opt/anaconda3/envs/dl/bin/python', [script]);

  if (pyProc !== null) {
    console.info('child process success');

    pyProc.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    pyProc.stderr.on('data', (data) => {
      console.error(data);
    });

    pyProc.on('close', (data) => {
      console.info(data);
    })
  }
}

const exitPyProc = () => {
  pyProc.kill();
  pyProc = null;
}

app.on('ready', createPyProc);
app.on('will-quit', exitPyProc);

app.on('ready', () =>
  installExtensions()
  .then(() => {
    mainWindow = new BrowserWindow({
      show: false,
      width: 1290,
      height: 800,
      minWidth: 1020,
      minHeight: 620,
      webPreferences: {
        nodeIntegration: true,
        preload: path.resolve(__dirname, 'preload.js'),
      }
    });

    require('./ipc');

    mainWindow.loadURL(
      `file://${path.resolve(__dirname, '../public/app.html')}`);

    mainWindow.webContents.on('did-finish-load', () => {
      mainWindow.show();
      mainWindow.focus();
    });

    mainWindow.on('closed', () => {
      mainWindow = null;
    });

    if (process.env.NODE_ENV === 'development') {
      mainWindow.openDevTools();
      mainWindow.webContents.on('context-menu', (e, props) => {
        const {
          x,
          y
        } = props;

        Menu.buildFromTemplate([{
          // label: 'Inspect element',
          // click() {
          //   mainWindow.inspectElement(x, y);
          // }
        }]).popup(mainWindow);
      });
    }

    if (process.platform === 'darwin') {
      template = [{
        label: 'IDSMonitor',
        submenu: [{
          label: 'About IDSMonitor',
          selector: 'orderFrontStandardAboutPanel:'
        }, {
          type: 'separator'
        }, {
          label: 'Services',
          submenu: []
        }, {
          type: 'separator'
        }, {
          label: 'Hide IDSMonitor',
          accelerator: 'Command+H',
          selector: 'hide:'
        }, {
          label: 'Hide Others',
          accelerator: 'Command+Shift+H',
          selector: 'hideOtherApplications:'
        }, {
          label: 'Show All',
          selector: 'unhideAllApplications:'
        }, {
          type: 'separator'
        }, {
          label: 'Quit',
          accelerator: 'Command+Q',
          click() {
            app.quit();
          }
        }]
      }, {
        label: 'Edit',
        submenu: [{
          label: 'Undo',
          accelerator: 'Command+Z',
          selector: 'undo:'
        }, {
          label: 'Redo',
          accelerator: 'Shift+Command+Z',
          selector: 'redo:'
        }, {
          type: 'separator'
        }, {
          label: 'Cut',
          accelerator: 'Command+X',
          selector: 'cut:'
        }, {
          label: 'Copy',
          accelerator: 'Command+C',
          selector: 'copy:'
        }, {
          label: 'Paste',
          accelerator: 'Command+V',
          selector: 'paste:'
        }, {
          label: 'Select All',
          accelerator: 'Command+A',
          selector: 'selectAll:'
        }]
      }, {
        label: 'View',
        submenu: (process.env.NODE_ENV === 'development') ? [{
          label: 'Reload',
          accelerator: 'Command+R',
          click() {
            mainWindow.webContents.reload();
          }
        }, {
          label: 'Toggle Full Screen',
          accelerator: 'Ctrl+Command+F',
          click() {
            mainWindow.setFullScreen(!mainWindow.isFullScreen());
          }
        }, {
          label: 'Toggle Developer Tools',
          accelerator: 'Alt+Command+I',
          click() {
            mainWindow.toggleDevTools();
          }
        }] : [{
          label: 'Toggle Full Screen',
          accelerator: 'Ctrl+Command+F',
          click() {
            mainWindow.setFullScreen(!mainWindow.isFullScreen());
          }
        }, {
          label: 'Toggle Developer Tools',
          accelerator: 'Alt+Command+I',
          click() {
            mainWindow.toggleDevTools();
          }
        }]
      }, {
        label: 'Window',
        submenu: [{
          label: 'Minimize',
          accelerator: 'Command+M',
          selector: 'performMiniaturize:'
        }, {
          label: 'Close',
          accelerator: 'Command+W',
          selector: 'performClose:'
        }, {
          type: 'separator'
        }, {
          label: 'Bring All to Front',
          selector: 'arrangeInFront:'
        }]
      }, {
        label: 'Help',
        submenu: [{
          label: 'Documentation',
          click() {
            shell.openExternal(
              'https://github.com/YCaptain/IDSMonitor/tree/master#readme'
            );
          }
        }, {
          label: 'Search Issues',
          click() {
            shell.openExternal(
              'https://github.com/YCaptain/IDSMonitor/issues');
          }
        }]
      }];

      menu = Menu.buildFromTemplate(template);
      Menu.setApplicationMenu(menu);
    } else {
      template = [{
        label: '&File',
        submenu: [{
          label: '&Open',
          accelerator: 'Ctrl+O'
        }, {
          label: '&Close',
          accelerator: 'Ctrl+W',
          click() {
            mainWindow.close();
          }
        }]
      }, {
        label: '&View',
        submenu: (process.env.NODE_ENV === 'development') ? [{
          label: '&Reload',
          accelerator: 'Ctrl+R',
          click() {
            mainWindow.webContents.reload();
          }
        }, {
          label: 'Toggle &Full Screen',
          accelerator: 'F11',
          click() {
            mainWindow.setFullScreen(!mainWindow.isFullScreen());
          }
        }, {
          label: 'Toggle &Developer Tools',
          accelerator: 'Alt+Ctrl+I',
          click() {
            mainWindow.toggleDevTools();
          }
        }] : [{
          label: 'Toggle &Full Screen',
          accelerator: 'F11',
          click() {
            mainWindow.setFullScreen(!mainWindow.isFullScreen());
          }
        }, {
          label: 'Toggle &Developer Tools',
          accelerator: 'Alt+Ctrl+I',
          click() {
            mainWindow.toggleDevTools();
          }
        }]
      }, {
        label: 'Help',
        submenu: [{
          label: 'Documentation',
          click() {
            shell.openExternal(
              'https://github.com/YCaptain/IDSMonitor/tree/master#readme'
            );
          }
        }, {
          label: 'Search Issues',
          click() {
            shell.openExternal(
              'https://github.com/YCaptain/IDSMonitor/issues');
          }
        }]
      }];
      menu = Menu.buildFromTemplate(template);
      mainWindow.setMenu(menu);
    }
  }));
