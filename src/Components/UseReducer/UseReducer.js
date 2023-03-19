import { useReducer, useRef } from "react"
import SimpleUseRed from "./SimpleUseRed"


const UseReducer = () => {

    const incrementRef = useRef()
    const decrementRef = useRef()
    const multiplyRef = useRef()

    const calculation = ((method) => {
        method.current.style.color = 'red'
    })

    const reducer = (state, action) => {
        let newState;
        if (action.type === 'inc') {
            newState = state + 1
            calculation(incrementRef)
        } else if (action.type === 'dec') {
            newState = state - 1
            calculation(decrementRef)
        }
        else if(action.type === 'mul'){
            newState = state * 2
            calculation(multiplyRef)
        }
        else{
            newState = state
        }
        return newState
    }

    const [state,dispatch] = useReducer(reducer,0)


    return (
        <>
            <div className="text-center mt-24">
                <h1 className="mb-10 text-5xl">{state}</h1>
                {/* btn 1 */}
                <button
                    ref={incrementRef}
                    onClick={() => dispatch({ type: "inc" })}
                    className="ml-2  text-blue-700 font-semibold  py-2 px-4 border border-slate-900  rounded hover:text-white hover:bg-blue-500">Increment</button>
                {/* btn 2 */}
                <button
                    ref={decrementRef}
                    onClick={() => dispatch({ type: "dec" })}
                    className="ml-2  text-blue-700 font-semibold  py-2 px-4 border border-slate-900 rounded hover:text-white hover:bg-blue-500">Decrement</button>
                {/* btn 3 */}
                <button
                    ref={multiplyRef}
                    onClick={() => dispatch({ type: "mul" })}
                    className="ml-2  text-blue-700 font-semibold  py-2 px-4 border border-slate-900 rounded hover:text-white hover:bg-blue-500">Multiply</button>
            </div>
<hr className="mt-5"/>
<hr/>
<hr/>
<hr/>
<hr/>
            <div>
                
                <SimpleUseRed />
            </div>
        </>
    )
}

export default UseReducer