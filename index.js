const {app, BrowserWindow} = require('electron');
let win

app.on('ready', function() {
  win = new BrowserWindow({width: 1100, height: 800});

  // win.loadURL(`file://${__dirname}/index.html`);
  win.loadURL(`http://localhost:3003/index.html`);
});
