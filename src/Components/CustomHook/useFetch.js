import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            let get = await fetch(url)
            let res = await get.json()
            setData(res)
        }
        getData()
    },[url])
    return [data]
}

export default useFetch