import { memo } from "react"

const Todo = (props) => {
    console.log('Child render');
  return (
  <>
  <h2>My Todo App</h2>
  {props.todo.map((e,i) =>{
    return <p key={i}>{e}</p>
  })}
  <button onClick={props.addTodo}>Add Todo</button>
  </>
  )
}

export default memo(Todo)