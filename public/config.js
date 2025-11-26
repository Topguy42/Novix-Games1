let host = location.protocol + '//' + location.host;

export let _CONFIG = {
  wispurl: localStorage.getItem('proxServer') || (location.protocol === 'https:' ? 'wss://' : 'ws://') + location.host + '/wisp/',
  bareurl: host + '/bare/'
};
