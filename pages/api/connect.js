import wifi from '../../lib/wifi.js'

export default (req, res) => {
  console.log("GOT A CONNECT")
  if (req.method === 'POST') {
    const {password, ssid} = req.body;
    // Connect to a network
    wifi.connect({ ssid, password }, error => {
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
  } else {
    res.statusCode = 200
    res.json({ status: 'method not handled' })
  }
  
}
