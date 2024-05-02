const {app , BrowserWindow } = require('electron');
const  path  = require('path');
const isDev = process.env.NODE_ENV !== "development";
const isMac = process.platform === 'darwin';
function createMainWindow(){
    const mainWidow = new BrowserWindow({
        titleL:"image resize",
        width:isDev? 1500 : 500,
        height:1600,
    });
    if(isDev){
        mainWidow.webContents,openDevTools();
    }
    mainWidow.loadFile(path.join(__dirname, "./renderer/index.html"))
}
app.whenReady().then(()=>{
    createMainWindow();
})
app.on("activate",()=>{
    if(BrowserWindow.getAllWindows.length === 0){
        createMainWindow();
    }
}) 
app.on('window-all-closed', ()=>{
    if(!isMac){
        app.quit();
    }
})
