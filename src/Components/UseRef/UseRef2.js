import { useState, useRef } from "react";

const UseRef2 = () => {
    
  // /* Use Ref DOM */
  // **********************
  const [input, setInput] = useState('');
  const inputField = useRef();

  const domHandler = (e) => {
    setInput(e.target.value);
  };
  const clicked = () => {
    inputField.current.focus()
    // inputField.current.value = 'ibm'
  };

  return (
    <>
    {/* Use Ref DOM */}
    <div>
        <h1 className="flex h-32 justify-center items-center  text-2xl font-semibold">
          Use Ref DOM
        </h1>
        <div className="flex justify-center">
          <input
            ref={inputField}
            placeholder="Enter Text"
            value={input}
            onChange={domHandler}
            className="ring-2 p-1"
          />
          <button
            onClick={clicked}
            className="ml-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Click Me
          </button>
        </div>
        </div>

    </>
  )
}

export default UseRef2