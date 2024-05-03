const path = require('path');
const os = require('os');
const fs = require('fs');
const resizeImg = require('resize-img');
const { app, BrowserWindow, Menu, ipcMain, shell } = require('electron');

const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

let mainWindow;
let aboutWindow;

// Main Window
function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: isDev ? 1000 : 500,
    height: 600,  
  });

  // Show devtools automatically if in development
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

    // mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);
   mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}
function createAboutWindow() {
    aboutWindow = new BrowserWindow({
      width: 300,
      height: 300,  
    });
  
      // mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);
     aboutWindow.loadFile(path.join(__dirname, './renderer/about.html'));
  }
// When the app is ready, create the window
app.on('ready', () => {
  createMainWindow();

  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);
});

// Menu template

   
const menu = [
    ...(
        isMac?
        [  {
            label:app.name,
            subMenu:[
                {
                    label:"About",
                    click:createAboutWindow,
                }
            ]
          },
        ]
    :[]),
    {    
        role:"fileMenu",
    },
    ...(
        isMac?
        [  {
            label:"Help",
            subMenu:[
                {
                    label:"About",
                    click:createAboutWindow,
                }
            ]
          },
        ]
    :[]),
]


// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (!isMac) app.quit();
});

