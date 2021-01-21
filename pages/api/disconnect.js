import wifi from '../../lib/wifi.js'

export default (req, res) => {
  // Disconnect from a network
  // not available on all os for now
  wifi.disconnect(error => {
    if (error) {
      console.log(error);
      res.statusCode = 500
      res.json({ error })
    } else {
      console.log('Disconnected');
      res.statusCode = 200
      res.json({ status:'Disconnected' })
    }
  });
}
