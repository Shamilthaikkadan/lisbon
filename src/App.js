import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Component/Home/Home'
import Product from './Component/Products/Product';
import Navbar from './Component/Home/Navbar/Navbar';
import Signup from './Component/SIGN UP/Signup';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route element ={<Navbar/>}>
      <Route  index element = {<Home/>}/>
      <Route path='/Products' element = {<Product/>}/>
      <Route path ='/Signup' element={<Signup/>}/>
      </Route>
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
