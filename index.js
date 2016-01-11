var app = require('app');
var browserWindow = require('browser-window');


app.on('ready', function() {
    var mainWindow = new browserWindow({
      width : 800,
      height : 600
    });
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});
