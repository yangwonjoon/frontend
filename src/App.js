import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import Detail from "./pages/detail/detail";
import AI from "./pages/ai/ai"
import Menu from "./pages/menu/menu";

function App() {

  return (
    <div className="App">
      <div className="mx-auto my-0 h-full min-w-[320px] max-w-[640px]">
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/detail/:id" element={<Detail></Detail>}></Route>
          <Route path="/aipage" element={<AI></AI>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
