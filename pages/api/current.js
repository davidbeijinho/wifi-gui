import wifi from '../../lib/wifi.js'

export default (req, res) => {
    // List the current wifi connections
    wifi.getCurrentConnections((error, currentConnections) => {
      if (error) {
        console.log(error);
        res.statusCode = 500
        res.json({ error })
      } else {
        /*
        // you may have several connections
        */
        console.log(currentConnections);
        res.statusCode = 200
        res.json({ currentConnections })
      }
    });
}
