import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const UseEffect = () => {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(count);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${count}&idStarts=1001`
      );
      const res = await get.json();
      setData(res);
      // console.log(res);
    }
    getData();
    document.title = `${count} Employees online`;
  }, [count]);
  return (
    <>
      <h1 className="flex h-32 justify-center items-center  text-2xl font-semibold">
        Use Effect
      </h1>

      <div className="flex justify-center">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <h1 className="text-2xl mx-10">{count}</h1>
        {console.log(count2)}
        <button
          onClick={() => {
            setCount2(setCount(count - 1));
          }}
          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
        >
          -
        </button>
      </div>
      <div className="mt-10">
        {data.map((element, index) => {
          return (
            <Link to={`/home/${element.id}`} key={index}>
            <div className="flex justify-between mx-10">
              <h4 className="bg-green-100 w-44 m-1">ID: {element.id}</h4>
              <h4 className="bg-green-100 w-44 m-1">
                First Name: {element.firstName}
              </h4>
              <h4 className="bg-green-100 w-96 m-1">Email: {element.email}</h4>
              <h4 className="bg-green-100 text-left w-44 m-1">
                Last Name: {element.lastName}
              </h4>
            </div>
            </Link>
          );
        })}
        < Outlet/>
      </div>
    </>
  );
};

export default UseEffect;
