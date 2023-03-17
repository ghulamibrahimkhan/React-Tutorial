import {useContext} from 'react'
import { GreetingsDiff } from '../../App'


const CGreet = () => {
  const christianGreet = useContext(GreetingsDiff)
  
  document.title = `Hello`;
  return (
    <>
    
    <div>Greetings In Christian Religion</div>
    <h1>Religion: {christianGreet[1][0]}</h1>
    <h1>Religion: {christianGreet[1][1]}</h1>
    </>

  )
}

export default CGreet