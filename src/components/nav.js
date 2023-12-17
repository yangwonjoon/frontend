/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import downArrow from "../assets/down_arrow.svg";
import { useState } from "react";
import AIModal from "./AIModal";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function Nav() {

  const navigate = useNavigate()

  //클릭한 nav 소주 가격 sojuatom에 저장
  async function sojuHandler(e) {
    e.preventDefault();
    const price = e.currentTarget.dataset.value;

    await axios.get(`http://localhost:8080/api/restaurant/info?underSojuPrice=${price}`)
      .then(response => {
        // 필터링 된 데이터로 메인 페이지 업데이트
        navigate('/', { state: { filteredData: response.data } });
        console.log(response.data)
      })
      .catch(error => {
        console.error("데이터 가져오기 오류:", error);
      });

    setShowMenu2(!showMenu2);
  }

  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [showMenu3, setShowMenu3] = useState(false);
  const [showMenu4, setShowMenu4] = useState(false);
  const [aiClicked, setAIClicked] = useState(false);

  const toggleMenu1 = () => {
    setShowMenu1(!showMenu1);
    setShowMenu2(false);
    setShowMenu3(false);
    setShowMenu4(false);
  };
  const toggleMenu2 = () => {
    setShowMenu1(false);
    setShowMenu2(!showMenu2);
    setShowMenu3(false);
    setShowMenu4(false);
  };
  const toggleMenu3 = () => {
    setShowMenu1(false);
    setShowMenu2(false);
    setShowMenu3(!showMenu3);
    setShowMenu4(false);
  };
  const toggleMenu4 = () => {
    setShowMenu1(false);
    setShowMenu2(false);
    setShowMenu3(false);
    setShowMenu4(!showMenu4);
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
              <a href="#" className="block px-4 py-2 text-sm underline">
                서울시 마포구
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-[#9A9A9A] line-through"
                onClick={() => {
                  alert("아직 개발 중 입니다.");
                }}
              >
                서울시 강남구
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-[#9A9A9A] line-through"
                onClick={() => {
                  alert("아직 개발 중 입니다.");
                }}
              >
                서울시 강서구
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
              <a href="#" data-value="4000" className="block px-4 py-2 text-sm" onClick={sojuHandler}>
                4000원
              </a>
              <a href="#" data-value="5000" className="block px-4 py-2 text-sm" onClick={sojuHandler}>
                4000~5000원
              </a>
              <a href="#" data-value="6000" className="block px-4 py-2 text-sm" onClick={sojuHandler}>
                5000~6000원
              </a>
              <a href="#" data-value="7000" className="block px-4 py-2 text-sm" onClick={sojuHandler}>
                6000~7000원
              </a>
              <a href="#" data-value="8000" className="block px-4 py-2 text-sm" onClick={sojuHandler}>
                8000원
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
                4000~5000원
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                5000~6000원
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                6000~7000원
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
          onClick={toggleMenu4}
          className="mx-4 inline-flex h-11 w-32 items-center justify-evenly rounded-3xl border-[1.5px] border-[#5a5a5a] px-4 py-2 text-base font-medium"
        >
          <span className="text-lg font-medium">기타</span>
          <img src={downArrow} alt="down_arrow" />
        </button>
        {showMenu4 && (
          <div className="absolute right-4 mt-1 w-32 origin-top-right rounded-md border-[1px] border-black bg-[#efefef] shadow-lg">
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-sm">
                한식
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                중식
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                일식
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                양식
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-[#9A9A9A] line-through"
                onClick={() => {
                  alert("아직 개발 중 입니다.");
                }}
              >
                기타
              </a>
            </div>
          </div>
        )}
      </div>
      <button
        className="mx-4 flex h-11 w-32 items-center justify-evenly rounded-3xl border-[1.5px] border-[#5a5a5a] text-base"
        onClick={() => {
          setAIClicked(!aiClicked);
        }}
      >
        <span className="text-lg font-medium">AI</span>
      </button>
      {aiClicked ? <AIModal /> : ""}
    </div>
  );
}

export default Nav;
