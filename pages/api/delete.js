import wifi from '../../lib/wifi.js'

import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD', 'POST'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors)

  // Rest of the API logic
  // res.json({ message: 'Hello Everyone!' })
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

export default handler
