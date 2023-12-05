/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import downArrow from "../assets/down_arrow.svg";
import { useState } from "react";
import AIModal from "./AIModal";

function Nav() {
  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [showMenu3, setShowMenu3] = useState(false);
  const [aiClicked, setAIClicked] = useState(false);

  const toggleMenu1 = () => {
    setShowMenu1(!showMenu1);
    setShowMenu2(false);
    setShowMenu3(false);
  };
  const toggleMenu2 = () => {
    setShowMenu1(false);
    setShowMenu2(!showMenu2);
    setShowMenu3(false);
  };
  const toggleMenu3 = () => {
    setShowMenu1(false);
    setShowMenu2(false);
    setShowMenu3(!showMenu3);
  };

  return (
    <div className="mt-4 flex items-center justify-center">
      <div className="relative inline-block">
        <button
          onClick={toggleMenu1}
          className="mx-4 inline-flex h-11 w-32 items-center justify-evenly rounded-3xl border-[1.5px] border-[#5a5a5a] px-4 py-2 text-base font-medium"
        >
          <span className="text-lg font-medium">지역</span>
          <img src={downArrow} alt="down_arrow" />
        </button>
        {showMenu1 && (
          <div className="absolute right-4 mt-1 w-32 origin-top-right rounded-md border-[1px] border-black bg-[#efefef] shadow-lg">
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-sm">
                서울시 마포구
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                서울시 강서구
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                서울시 강남구
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="relative inline-block">
        <button
          onClick={toggleMenu2}
          className="mx-4 inline-flex h-11 w-32 items-center justify-evenly rounded-3xl border-[1.5px] border-[#5a5a5a] px-4 py-2 text-base font-medium"
        >
          <span className="text-lg font-medium">소주</span>
          <img src={downArrow} alt="down_arrow" />
        </button>
        {showMenu2 && (
          <div className="absolute right-4 mt-1 w-32 origin-top-right rounded-md border-[1px] border-black bg-[#efefef] shadow-lg">
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-sm">
                4000 ↓
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                4000 ~ 5000원
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                5000 ~ 6000원
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                6000 ~ 7000원
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                7000 ↑
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="relative inline-block">
        <button
          onClick={toggleMenu3}
          className="mx-4 inline-flex h-11 w-32 items-center justify-evenly rounded-3xl border-[1.5px] border-[#5a5a5a] px-4 py-2 text-base font-medium"
        >
          <span className="text-lg font-medium">맥주</span>
          <img src={downArrow} alt="down_arrow" />
        </button>
        {showMenu3 && (
          <div className="absolute right-4 mt-1 w-32 origin-top-right rounded-md border-[1px] border-black bg-[#efefef] shadow-lg">
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-sm">
                4000 ↓
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                4000 ~ 5000원
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                5000 ~ 6000원
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                6000 ~ 7000원
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                7000 ↑
              </a>
            </div>
          </div>
        )}
      </div>
      {/* <div className="mx-4 flex h-11 w-32 items-center justify-evenly rounded-3xl border-[1.5px] border-[#5a5a5a] text-base hover:cursor-pointer">
        <span className="text-lg font-medium">소주</span>
        <img src={downArrow} alt="down_arrow" />
      </div>
      <div className="mx-4 flex h-11 w-32 items-center justify-evenly rounded-3xl border-[1.5px] border-[#5a5a5a] text-base hover:cursor-pointer">
        <span className="text-lg font-medium">맥주</span>
        <img src={downArrow} alt="down_arrow" />
      </div>*/}
      <button
        className="mx-4 flex h-11 w-36 items-center justify-evenly rounded-3xl border-[1.5px] border-[#5a5a5a] text-base"
        onClick={() => {
          setAIClicked(!aiClicked);
        }}
      >
        <span className="text-lg font-medium">AI에게 추천받기</span>
      </button>
      {aiClicked ? <AIModal /> : ""}
    </div>
  );
}

export default Nav;
