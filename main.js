// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const windowStateKeeper = require('electron-window-state')
const { autoUpdater } = require("electron-updater")
const log = require('electron-log');
const { trackEvent } = require('./analytics');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// Optional Logging
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');

app.on('ready', function () {
  // Load the previous state with fallback to defaults
  let mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  });
  mainWindow = new BrowserWindow({
    title: "Qawl — Quran Reader",
    show: false,
    width: mainWindowState.width,
    height: mainWindowState.height,
    x: mainWindowState.x,
    y: mainWindowState.y,
    resizable: true,
    scrollBounce: true,
    backgroundColor: '#858585',
    icon: __dirname + '/assets/icon.png'
  });

  mainWindowState.manage(mainWindow);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.loadFile('index.html')
  mainWindow.setMenu(null)
  log.info(`Version: ${app.getVersion()}`)
  autoUpdater.checkForUpdatesAndNotify()

  //I think so Quran.com links open in default user browser
  mainWindow.webContents.on('new-window', function(e, url) {
    e.preventDefault();
    require('electron').shell.openExternal(url);
  });

  //log app open
  trackEvent('User Interaction', 'App opened');

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
function toggleFullscreen() {
  if (mainWindow.isFullScreen()) {
      mainWindow.setFullScreen(false);
  } else {
      mainWindow.setFullScreen(true);
  }
}
function toggleDevTools() {
  mainWindow.toggleDevTools();
}
ipcMain.on('fullScreen', () => toggleFullscreen());
ipcMain.on('devTools', () => toggleDevTools());

