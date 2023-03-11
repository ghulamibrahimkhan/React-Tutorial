import React, { useState } from 'react'

const UseState1 = () => {
    const [num, setNum] = useState(1)
    
    const add = (n) => {
        setNum(num + n)
    }
    const sub = (n) => {
        setNum(num - n)
    }


    return (
        <>
            <h1 className="flex h-32
             justify-center items-center  text-2xl font-semibold">Use State</h1>
            <div className='flex justify-center items-center'>
                {/* Use State Addition */}
                <button onClick={()=> add(1)} className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded m-10">+
                </button>
                {/* Use State current Value */}
                <h1 className='text-2xl'>{num}</h1>
                {/*Use State  substract */}
                <button onClick={()=> sub(1)} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded  m-10">-
                </button>
            </div>
        </>
    )
}

export default UseState1