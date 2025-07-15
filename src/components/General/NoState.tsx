import cloud from '../../assets/cloud.svg'

function NoState() {
  return (
    <div className="no-state full-width">
      <img src={cloud} alt="" />
      <h2>No city selected</h2>
      <p>Start typing a city name to view the weather forecast.</p>

    </div>
  )
}

export default NoState
