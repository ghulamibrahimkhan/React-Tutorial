import { Link, Outlet } from "react-router-dom"

const About = () => {
  return (
    <>
      <div className="bg-slate-500 text-center text-4xl">About Page</div>
      <div className="flex justify-center text-2xl">
        <Link className="m-10" to={"insta"}>Insta</Link>

        <Link className="m-10" to={"facebook"}>Facebook</Link>
      </div>
      <Outlet />
    </>
  )
}

export default About