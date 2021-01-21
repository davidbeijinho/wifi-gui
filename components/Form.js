
import React, { useState } from 'react';

export default function Form({ network, onCancel, onSubmit, error }) {
  const [password, setPassword] = useState(setPassword);
  const handleChange = ({ target }) => {
    console.log({ value: target.value })
    setPassword(target.value)
  }
  const handleSubmit = async () => {
    console.log({
      password,
      ssid: network.ssid
    })
    onSubmit({
      password,
      ssid: network.ssid
    })
  }

  return <>
  {error && <p>Was not able to connect</p>}
    <label>SSID</label>
    <input value={network.ssid} readOnly />
    <label>Password</label>
    <input onChange={handleChange} />
    <button onClick={handleSubmit}>Connect</button>
    <button onClick={onCancel} >Cancel</button>
  </>
}
