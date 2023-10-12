import List from "./Navbar"
import AutoLayoutExample from "./List"

export default function Main () {
  return (
    <div className="App">
      <List/>
      <img className='ListImg' src={process.env.PUBLIC_URL + '/bg.png'}/>
    </div>
  )
}