import { useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Error 404 Page Not Found</div>
      <button onClick={()=> navigate('useEffect')}>Go back</button>
    </>
  )
}

export default Error