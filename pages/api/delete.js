import wifi from '../../lib/wifi.js'

export default (req, res) => {
  if (req.method === 'POST') {
  // Delete a saved network
  // not available on all os for now
  wifi.deleteConnection({ ssid: 'ssid' }, error => {
    if (error) {
      console.log(error);
      res.statusCode = 500
      res.json({ error })
    } else {
      console.log('Deleted');
      res.statusCode = 200
      res.json({ status: "deleted" })
    }
  });
} else {
  res.statusCode = 200
  res.json({ status: 'method not handled' })
}
}
