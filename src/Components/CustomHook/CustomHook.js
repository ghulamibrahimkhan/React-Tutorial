import useFetch from "./useFetch"

const CustomHook = () => {
    const [data] = useFetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
    return (
        <>
            <div>CustomHook</div>

            {data.map((e,i)=>{
                return <h1 key={i}> {e.firstName} </h1>
            })}
        </>
    )
}

export default CustomHook