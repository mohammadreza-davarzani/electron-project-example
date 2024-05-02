const {app , BrowserWindow } = require('electron');
const  path  = require('path');
const isMac = process.platform === 'darwin';
function createMainWindow(){
    const mainWidow = new BrowserWindow({
        titleL:"image resize",
        width:1500,
        height:1600,
    });
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
