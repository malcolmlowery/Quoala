import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './views/home';
import ProductDetails from './views/ProductDetails';

const App = () => {
   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Navbar />}>
                  <Route path='/' element={<Home />} />
                  <Route path='/product' element={<ProductDetails />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   )
};

export default App;
