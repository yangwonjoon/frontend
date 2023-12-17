import { useState } from "react";
import star from "../assets/star.svg";
import filledStar from "../assets/filled_star.svg";
import cancel from "../assets/cancel.svg";
import sampleImage5 from "../assets/sampleImage5.png";
import sampleImage6 from "../assets/sampleImage6.png";
import sampleImage7 from "../assets/sampleImage7.png";
import mapSample from "../assets/mapSample.png";
import upArrow from "../assets/up_arrow.svg";
import downArrow from "../assets/down_arrow.svg";

function DetailContainer() {
  const [arrowClicked, setArrowClicked] = useState(false);
  const [starCliked, setStartClicked] = useState(false);

  const arrowClickedHandler = () => {
    setArrowClicked(!arrowClicked);
  };

  const saveClickHandler = () => {
    setStartClicked((prevState) => !prevState);
  };

  return (
    <div className="mt-5 flex w-full flex-col items-center bg-[#F9F9F9] p-7">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <img
            src={starCliked ? filledStar : star}
            alt="star"
            className="w-6 hover:cursor-pointer"
            onClick={saveClickHandler}
          />
          <div className="flex items-end">
            <span className="ml-3 text-2xl text-[#325FFF] hover:cursor-pointer">
              TeamB 홍대점
            </span>
            <span className="ml-2 text-sm text-[#5A5A5A]">한식, 일식</span>
            <div className="ml-2 flex items-center">
              <img src={filledStar} alt="star" className="w-3" />
              <span className="ml-1 text-sm">365</span>
            </div>
          </div>
        </div>
        <img src={cancel} alt="cancel" className="w-5 hover:cursor-pointer" />
      </div>
      <div className="mt-3 grid w-full grid-cols-2 gap-4">
        <img
          src={sampleImage5}
          alt="sampleImage5"
          className="w-full hover:cursor-pointer"
        />
        <img
          src={sampleImage6}
          alt="sampleImage6"
          className="w-full hover:cursor-pointer"
        />
        <img
          src={sampleImage5}
          alt="sampleImage5"
          className="w-full hover:cursor-pointer"
        />
        <img
          src={sampleImage7}
          alt="sampleImage7"
          className="w-full hover:cursor-pointer"
        />
      </div>
      <div className="mt-3 flex w-full items-center justify-start">
        <div className="flex h-8 w-32 items-center justify-center rounded-xl border-[1px] bg-[#CCE7D0] text-sm">
          소주 3000원
        </div>
        <div className="ml-2 flex h-8 w-32 items-center justify-center rounded-xl border-[1px] bg-[#e8e6b1] text-sm">
          맥주 4000원
        </div>
      </div>
      <div className="mt-4 flex w-full flex-col items-start">
        <span className="text-lg font-medium text-[#444444]">
          영업시간 : 11:00 ~ 17:00
        </span>
        <span className="mt-4 text-lg font-medium text-[#444444]">
          주소 : 서울특별시 마포구 양화로 122 LAB7빌딩 3층, 4층
        </span>
      </div>
      <img src={mapSample} alt="mapSample" className="mt-5" />
      <div className="mt-4 w-full border-t-2">
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-medium">댓글</span>
            {arrowClicked ? (
              <img src={downArrow} alt="down_arrow" className="ml-2 w-4" />
            ) : (
              <img src={upArrow} alt="up_arrow" className="ml-2 w-4" />
            )}
          </div>
          <div
            className="flex h-7 w-24 items-center justify-center rounded-lg border-[1px] border-[#5A5A5A] bg-[#D9D9D9] text-sm hover:cursor-pointer"
            onClick={() => {
              arrowClickedHandler();
            }}
          >
            댓글 쓰기
          </div>
        </div>
        {arrowClicked && (
          <div className="mt-4 flex h-48 rounded-lg border-[1px] border-[#5A5A5A] bg-[#EFEFEF] p-4">
            <div className="relative flex h-full basis-11/12 items-start">
              <span className="flex w-1/6 items-center justify-center text-sm text-[#5A5A5A]">
                sulrijoah123
              </span>
              <textarea
                placeholder="300자 이내로 댓글을 작성하세요."
                className="mx-3 h-full w-5/6 bg-[#EFEFEF] text-sm font-medium text-[#5A5A5A] outline-none"
              ></textarea>
              <span className="absolute bottom-0 right-6 text-sm text-[#5A5A5A]">
                0 / 300자
              </span>
            </div>
            <div className="flex basis-1/12">
              <div className="flex h-6 w-11 items-center justify-center rounded-lg border-[1px] border-[#5A5A5A] bg-[#D9D9D9] text-xs hover:cursor-pointer">
                등록
              </div>
            </div>
          </div>
        )}
        <div className="mt-6">
          <div className="flex flex-col items-start">
            <span className="text-sm">sulrijoah123</span>
            <div className="mb-2 ml-1 mt-1 flex h-9 w-full items-center justify-between rounded-lg bg-[#EFEFEF] px-3">
              <span className="text-sm">
                맛이써유유유유유ㅠ유유ㅠ유유ㅠ유ㅠ유
              </span>
              <button
                type="button"
                className="flex h-7 w-12 items-center justify-center rounded-lg border-[1px] border-[#CFCFCF] bg-[#F3F3F3] text-sm text-[#2C2C2C]"
              >
                수정
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm">너내도도도독</span>
            <div className="mb-2 ml-1 mt-1 flex h-9 w-full items-center justify-between rounded-lg bg-[#EFEFEF] px-3">
              <span className="text-sm">
                담주부터 소주 가격 1000원씩 오른대요!!!!! 다들
                참고하세요ㅠㅠㅠㅠ
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm">kakwjeor2123</span>
            <div className="mb-2 ml-1 mt-1 flex h-9 w-full items-center justify-between rounded-lg bg-[#EFEFEF] px-3">
              <span className="text-sm">가성비가 좋아서 자주 감</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailContainer;
