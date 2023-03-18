import { useState, useRef } from "react"

const UseRef3 = () => {

    const [state, setState] = useState('Ibrahim');
    const refElement = useRef('')
    console.log(refElement);
    // refElement.current.focus()
    function reset() {
        setState('')
        refElement.current.focus()
    }
    function change(){
        refElement.current.style.color = 'green'
    }
    return (
        <>
            <div className="mb-5">
                <h1 className="flex h-32 justify-center items-center  text-2xl font-semibold">
                    Use Ref Practise
                </h1>
                <div className="flex justify-center">

                    {/******* input ********/}
                    <input
                        type='text'
                        onChange={(e) => { setState(e.target.value) }}
                        value={state}
                        ref={refElement}
                        className="ring-2 p-1" />


                    <button
                        onClick={reset}
                        className="ml-2  text-blue-700 font-semibold  py-2 px-4 border border-slate-900  rounded"
                    >
                        Reset
                    </button>
                    <button
                    onClick={change}
                        className="ml-2  text-blue-700 font-semibold  py-2 px-4 border border-slate-900  rounded"
                    >
                        Change
                    </button>

                </div>
            </div>
        </>
    )
}

export default UseRef3