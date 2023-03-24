import { useState, useCallback } from "react"
import Todo from "./Todo";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const increment = () => {
    setCount((c) => c + 1)
  }
  const addTodo = useCallback(() => {
    setTodo((t) => [...t, 'New To Do'])
  },[]);

  return (
    <>
      <div>
        Count : {count}
        <hr />
        <button onClick={increment}>+</button>
      </div>
      <Todo todo={todo} addTodo={addTodo} />
    </>
  )
}

export default UseCallback