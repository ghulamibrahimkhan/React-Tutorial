import { useContext } from "react";
import { GreetingsDiff } from "../../App";

const MGreet = () => {
  const muslimGreet = useContext(GreetingsDiff)
  document.title = `Asalamo Alaikum`;
  return (
    <>
    <div>Greetings in Muslim Religion</div>
    <h1>Religion: {muslimGreet[0][0]}</h1>
    <h1>Greetings: {muslimGreet[0][1]}</h1>

    </>
  )
}

export default MGreet