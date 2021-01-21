
export default function List({ networks, onSelect }) {
  return networks.map((network) =>
    <p onClick={()=> onSelect(network)} key={network.bssid}>{network.ssid}</p>
  )
}
