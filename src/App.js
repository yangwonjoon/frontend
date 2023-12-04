import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom'

import Main from './pages/main/main';
import { Detail, Counter, Display, scount } from './pages/detail/detail';
import Login from './pages/login/login'
import SignUp from './pages/signup/signup'

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Main></Main>} ></Route>
        <Route path='/detail' element={<Detail></Detail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div >
  );
}

export default App;
