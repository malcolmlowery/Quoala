import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './views/home';

const App = () => {
   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Navbar />}>
                  <Route path='/' element={<Home />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   )
};

export default App;
