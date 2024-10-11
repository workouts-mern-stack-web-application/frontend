import { BrowserRouter , Routes , Route } from 'react-router-dom'

import Home from './pages/Home'

import Navbar_ from './components/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar_></Navbar_>
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={<Home/>}>

            </Route>
            
          </Routes>
        </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
