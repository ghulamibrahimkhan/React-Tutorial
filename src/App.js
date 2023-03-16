import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import UseState from './Components/UseState';
import UseEffect from './Components/UseEffect';
import About from './Components/About';
import Error from './Components/Error';
import Facebook from './Components/Facebook';
import Insta from './Components/Insta';
import UserDetails from './Components/UserDetails';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/'>
          <Route index element={<UseState />} />

          <Route path='/home' element={<UseState />} >
          </Route>

            <Route path='/home/:userId' element={<UserDetails />}/>

        </Route>

        <Route path=':userId' element={<UserDetails />} />
        <Route path='/useEffect' element={<UseEffect />} />

        {/* Nested Routes */}
        <Route path='/about' element={<About />}>
          <Route index element={<Facebook />} />
          <Route path='facebook' element={<Facebook />} />
          <Route path='Insta' element={<Insta />} />
        </Route>


        Error Page
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
