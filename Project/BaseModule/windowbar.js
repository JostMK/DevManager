const $ = require('jquery');
const {remote} = require('electron');

var win = remote.getCurrentWindow();

//register Windowbar clicks
$('#minimize').click(function () {
    win.minimize();
});

$('#maximize').click(function () {
    if (win.isMaximized())
        win.unmaximize();
    else
        win.maximize();
});

$('#close').click(function () {
    win.close();
});

//change maximize icon based on state of window
win.on('maximize', () => {
    $('#maximize').text("🗗");
});
win.on('unmaximize', () => {
    $('#maximize').text("🗖");
});
