import { useState, useEffect, useRef } from "react";
import UseRef2 from "./UseRef2";
import UseRef3 from "./UseRef3";

const UseRef = () => {
  const [input, setInput] = useState("");
  const counter = useRef(-1);
  useEffect(() => {
    counter.current = counter.current + 1;
    console.log(input);
  });

  const formHanler = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="mb-5">
        <h1 className="flex h-32 justify-center items-center  text-2xl font-semibold">
          Use Ref
        </h1>
        <div className="flex justify-center">
          <input
            placeholder="Enter Text"
            value={input}
            onChange={formHanler}
            className="ring-2 p-1"
          />
        </div>
        <h4 className="w-full m-auto text-center mt-10">
          Application has been randered{" "}
          {counter.current < 0 ? 0 : counter.current} times
        </h4>
      </div>
      <UseRef2 />
      <UseRef3 />
    </>
  );
};

export default UseRef;
