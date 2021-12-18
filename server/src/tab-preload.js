const { ipcRenderer } = require('electron')

window.api = {
  newTab: (url) => {
    ipcRenderer.invoke('new-tab', url);
  },
  onTabChange: (cb) => {
    ipcRenderer.on('tabChange', (event, tabList) => {
      if (cb) {
        cb(tabList);
      }
    })
  },
  getTabs: () => {
    return ipcRenderer.invoke('get-tabs');
  },
  setTab: (tab) => {
    return ipcRenderer.invoke('set-tab', tab);
  },
  closeTab: (tab) => {
    return ipcRenderer.invoke('close-tab', tab);
  },
  closeWindow: () => {
    return ipcRenderer.invoke('close-window');
  },
  minimumWindow: () => {
    return ipcRenderer.invoke('minimum-window');
  },
  toggleMaximumWindow: () => {
    return ipcRenderer.invoke('toggle-maximum-window');
  }
}

console.log('Done preload client');
