import './App.css';
import Login from './components/LoginUser';
import RegistrationPage from './components/RegisterUser';
import LoginPage from './components/LoginAdmin';
import HomePage from './components/Home';
// import Usernav from './components/Usernav';
// import Adminnav from "./components/Adminnav"
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navigation from './components/Navigation';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navigation/>
     <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/user" element={<Login/>}></Route>
      <Route path='/admin' element={<LoginPage/>}></Route>
      <Route path='/register' element={<RegistrationPage/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
