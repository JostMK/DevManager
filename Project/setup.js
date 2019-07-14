const { app, BrowserWindow } = require('electron')

var path = require('path')


let win

function createWindow() {

    // create BrowserWindow
    win = new BrowserWindow({
        width: 1100,
        height: 750,
        minWidth: 650,
        minHeight: 400,
        frame: false,
        backgroundColor: '#333333',
        webPreferences: {
            nodeIntegration: true
        },
        icon: path.join(__dirname, 'assets/icons/testIcon.png')
    })

    // load Main Window into BrowserWindow
    win.loadFile('BaseModule/main.html')


    //garbage collection
    win.on('closed', () => {
        win = null;
    })
} 


// create Main Window when app ready
app.on('ready', createWindow)



//special case with MacOS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})