import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <div className="flex text-cyan-50  bg-stone-800 items-center justify-between">
                <ul className="flex list-none w-1/4">
                    <li className="mx-6">
                        <Link to='/'>Use State</Link>
                    </li>
                    <li className="mx-6">
                        <Link to='./UseEffect'>Use Effect</Link>
                    </li>
                    <li className="mx-6">
                        <Link to='./About'>About</Link>
                    </li>
                    <li className="mx-6">
                        <Link to='./greet'>Greeting</Link>
                    </li>
                </ul>
                <div className="h-28 flex
             justify-center items-center text-6xl">React Hooks
                </div>
                <div className="w-1/4"></div>
            </div>
        </>
    )
}

export default Header