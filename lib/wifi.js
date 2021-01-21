var wifi = require('node-wifi');

// Initialize wifi module
// Absolutely necessary even to set interface to null
wifi.init({
  iface: process.env.INTERFACE // network interface, choose a random wifi interface if set to null
});

const lib = {
    scan: wifi.scan,
    connect: wifi.connect,
    getCurrentConnections: wifi.getCurrentConnections,
    deleteConnection: wifi.deleteConnection,
    disconnect: wifi.disconnect,
}

export default lib;
