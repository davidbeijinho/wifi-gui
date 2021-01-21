import wifi from '../../lib/wifi.js'

export default (req, res) => {
  // Connect to a network
  wifi.connect({ ssid: 'ssid', password: 'password' }, error => {
    if (error) {
      console.log(error);
      res.statusCode = 500
      res.json({ error })
    } else {
      console.log('Connected');
      res.statusCode = 200
      res.json({ status: 'Connected' })
    }
  });
}
