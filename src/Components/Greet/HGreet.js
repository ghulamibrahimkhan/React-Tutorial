import { useContext } from "react";
import { GreetingsDiff } from "../../App";

const HGreet = () => {
    const hinduGreet = useContext(GreetingsDiff)
    
  document.title = `Namsetay`;
  return (
    <>
    <div>Greeting In Hindu Religion</div>
    <div>
    <h1>{hinduGreet[2][0]}</h1>
    <h1>{hinduGreet[2][1]}</h1>
    </div>
    </>
  )
}

export default HGreet