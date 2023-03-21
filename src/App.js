import { Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import Header from "./Components/Header";
import UseState from "./Components/UseState";
import UseEffect from "./Components/UseEffect";
import About from "./Components/About";
import Error from "./Components/Error";
import Facebook from "./Components/Facebook";
import Insta from "./Components/Insta";
import UserDetails from "./Components/UserDetails";
import Greeting from "./Components/Greet/Greeting";
import MGreet from "./Components/Greet/MGreet";
import CGreet from "./Components/Greet/CGreet";
import HGreet from "./Components/Greet/HGreet";
import UseRef from "./Components/UseRef/UseRef";
import UseReducer from "./Components/UseReducer/UseReducer";
import CustomHook from "./Components/CustomHook/CustomHook";
import UseMemo from "./Components/UseMemo/UseMemo";

const GreetingsDiff = createContext();
function App() {
  const greeting = [
    ["Muslim", "Asalamo Alaikum"],
    ["Christian", "Hello"],
    ["Hindu", "Namastey"],
  ];
  const [state] = useState(greeting);

  return (
    <>
      <Header />

      {/* Create Contex */}
      <GreetingsDiff.Provider value={state}>
        <Routes>
          {/* Home */}
          <Route path="/">
            <Route index element={<UseState />} />

            <Route path="/home" element={<UseState />}></Route>
          </Route>

          {/*  Use Effect*/}
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/home/:userId" element={<UserDetails />} />

          {/* About Nested Routes */}
          <Route path="/about" element={<About />}>
            <Route index element={<Facebook />} />
            <Route path="facebook" element={<Facebook />} />
            <Route path="insta" element={<Insta />} />
          </Route>

          {/*Greeting Nesdted Routes  */}
          <Route path="/greet" element={<Greeting />}>
            <Route path="Mgreet" element={<MGreet />} />
            <Route path="Cgreet" element={<CGreet />} />
            <Route path="Hgreet" element={<HGreet />} />
          </Route>

          {/* UseRef */}
          <Route path="/useRef" element={<UseRef />}/>

          {/* UseReducer */}
          <Route path="/UseReducer" element={<UseReducer />}/>

          {/* Custom Hook */}
          <Route path="/CustomHook" element={<CustomHook />}/>

          {/* Use Memo */}
          <Route path="/UseMemo" element={<UseMemo />}/>

          {/* Error Page */}
          <Route path="*" element={<Error />} />
        </Routes>
      </GreetingsDiff.Provider>
    </>
  );
}

export default App;
export {GreetingsDiff}
