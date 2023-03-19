import { useReducer } from "react"

const SimpleUseRed = () => {

    let initialState = 0
    const reducer = (state,action)=>{
        switch (action) {
            case "inc":
                return state + 1
            case "dec":
                return state - 1
        
            default:
                break;
        }
    }
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <>
            <div className="text-center mt-10">
                <h1 className="mb-10 text-5xl">{state}</h1>

                <button
                onClick={()=>{dispatch("inc")}}
                    className="ml-2  text-blue-700 font-semibold  py-2 px-4 border border-slate-900  rounded hover:text-white hover:bg-blue-500">Increment</button>
                <button
                onClick={()=>{dispatch('dec')}}
                    className="ml-2  text-blue-700 font-semibold  py-2 px-4 border border-slate-900  rounded hover:text-white hover:bg-blue-500">Decrement</button>
            </div>
        </>
    )
}

export default SimpleUseRed