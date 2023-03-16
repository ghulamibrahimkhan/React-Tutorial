import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const UserDetails = () => {

    const { userId } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        async function getData() {
            const get = await fetch(
                `https://hub.dummyapis.com/employee?noofRecords=1&idStarts=1001`
              );
            const res = await get.json();
            setData(res[0])
        }
        getData();
    },[])
    return (
        <>
            <div>
        
                <div>User Details Page {userId}</div>
                <h4>ID :{data.id}</h4>
                <h4>First Name :{data.firstName}</h4>
                <h4>Last Name :{data.lastName}</h4>
                <h4>Contact# :{data.contactNumber}</h4>
                <h4>Age :{data.age}</h4>
                <h4>Salary :{data.salary}</h4>
            </div>
        </>
    )
}

export default UserDetails