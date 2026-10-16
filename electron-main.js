const { app, BrowserWindow } = require('electron');
app.whenReady().then(() => {
  const w = new BrowserWindow({ width: 1100, height: 780, backgroundColor: '#050914', autoHideMenuBar: true });
  w.loadFile('www/index.html');
});
app.on('window-all-closed', () => app.quit());
