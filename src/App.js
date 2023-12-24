import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import { atom, useRecoilState } from "recoil";

import Main from "./pages/main/main";
import Detail from "./pages/detail/detail";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Mypage from "./pages/mypage/mypage";
import AI from "./pages/ai/ai"
import Menu from "./pages/menu/menu";


function App() {
  return (
    <div className="App">
      <div className="mx-auto my-0 h-full min-w-[320px] max-w-[640px]">
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>


          <Route path="/detail/:id" element={<Detail></Detail>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/mypage" element={<Mypage></Mypage>}></Route>

          <Route path="/aipage" element={<AI></AI>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
