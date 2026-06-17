import './App.css'
import Usercard from './components/Usercard'
import PHOTO from './assets/PHOTO.jpeg'
import hero from './assets/hero.png'
import react from './assets/react.svg'

function App() {


  return (
    <div className='container'>
      <Usercard name="vriza" desc="desc1" image={PHOTO} style={{"border-radius":"10px"}}/>
      <Usercard name="vrinda" desc="desc2" image={hero} style={{"border-radius":"10px"}}/>
      <Usercard name="vidhi" desc="desc3" image={react} style={{"border-radius":"10px"}}/>


    </div>
  )
}

export default App
