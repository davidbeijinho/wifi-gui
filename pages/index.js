import List from '../components/List.js'
import Form from '../components/Form.js'
import React, { useState } from 'react';

const getNetworks = async () => {
  const res = await fetch(`http://localhost:3000/api/networks`)
  const data = await res.json()
  return data.networks;
}

const getCurrent = async () => {
  const res = await fetch(`http://localhost:3000/api/current`)
  const data = await res.json()
  return data.currentConnections[0];
}

export async function getStaticProps(context) {
  const networks = await getNetworks();
  const current = await getCurrent();
  const props =  {};
  if (networks) {
    props.networks= networks;
  }
  if (current) {
    props.current= current;
  }
  return {props};
}

const connect = async ({ password, ssid }) => {
  const response = await fetch(`http://localhost:3000/api/connect`, {
    method: 'POST',
    body: JSON.stringify({
      password,
      ssid
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  if (response.status >= 200 && response.status <= 299) {
    const jsonResponse = await response.json();
    console.log("SUCCESS", { jsonResponse });
    return true;
  } else {
    // Handle errors
    console.log("ERROR", { status: response.status, statusText: response.statusText });
    return false;
  }

}


export default function Home({ networks, current }) {
  const [selected, setSelected] = useState(false);
  const [error, setError] = useState(false);
  const [currentConnection, setCurrentConnection] = useState(current);
  const handleCanel = () => {
    setSelected(false)
    setError(false)
  }
  const handleSubmit = async ({ password, ssid }) => {

    const result = await connect({ password, ssid })
    if (result) {
      setSelected(false)
      const newCurrent = await getCurrent();
      setCurrentConnection(newCurrent);
    } else {
      setError(true)
    }
  }
console.log("NETWORKS", networks[0]);
  return <>
    {currentConnection && <p>CONNECTED TO {currentConnection.ssid}</p>}
    {!currentConnection && <p>Not Connected</p>}
    { !selected &&  networks && <List networks={networks} onSelect={setSelected} />}
    {selected && < Form error={error} network={selected} onCancel={handleCanel} onSubmit={handleSubmit} />}
  </>
}
