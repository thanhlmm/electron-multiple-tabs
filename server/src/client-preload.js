const { ipcRenderer, shell } = require('electron')
const ipc = require('node-ipc')
const uuid = require('uuid')

let resolveSocketPromise
let socketPromise = new Promise(resolve => {
  resolveSocketPromise = resolve
})

ipcRenderer.on('set-socket', (event, { name }) => {
  resolveSocketPromise(name)
})

window.ipc = {
  getServerSocket: () => {
    return socketPromise
  },
  ipcConnect: (id, func, buffer = false) => {
    ipc.config.silent = true;
    ipc.config.rawBuffer = buffer;

    ipc.connectTo(id, () => {
      func(ipc.of[id])
    })
  },
  uuid: uuid
}

window.api = {
  openUrl: (url) => shell.openExternal(url),
  newTab: () => {
    ipcRenderer.invoke('new-tab', window.location.href);
  }
}

console.log('Done preload client');
