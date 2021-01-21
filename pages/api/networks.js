import wifi from '../../lib/wifi.js'

export default (req, res) => {
  wifi.scan((error, networks) => {
    if (error) {
      console.log(error);
      res.statusCode = 500
      res.json({ error })
    } else {

      console.log(networks);
      res.statusCode = 200
      res.json({ networks })
    }
  });
}
