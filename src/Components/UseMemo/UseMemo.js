import { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [name,setName] = useState('')


  const expensiveCalculation = (num) => {
    for (let i = 0; i < 10000; i++) {
      console.log(1);
      return num
    }
  }

  const calculation = useMemo(()=>
    expensiveCalculation(count)
  ,[count ])

  return (
    <>
    <button onClick={() => setCount(count+ 1)}>Increment</button>
    <h1>Count: {count}</h1>

    <input placeholder="Input Text" onChange={((e)=>{setName(e.target.value)})}/>
    <h1>{name}</h1>
    </>
  )
}

export default UseMemo