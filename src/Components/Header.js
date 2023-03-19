import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <div className="flex text-cyan-50  bg-stone-800 items-center justify-center w-full">
                <ul className="flex justify-around list-none  w-2/5">
                    <li className="mx-4">
                        <Link to='/'>Use State</Link>
                    </li>
                    <li className="mx-4">
                        <Link to='./UseEffect'>Use Effect</Link>
                    </li>
                    <li className="mx-4">
                        <Link to='./About'>About</Link>
                    </li>
                    <li className="mx-4">
                        <Link to='./greet'>Greeting</Link>
                    </li>
                </ul>
                <div className="h-28 flex
             justify-center items-center text-6xl ">React Hooks
                </div>
                <ul className="flex justify-around list-none  w-2/5">
                    <li className="mx-4">
                        <Link to='./UseRef'>Use Ref</Link>
                    </li>
                    <li className="mx-4">
                        <Link to='./UseReducer'>Use Reducer</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header