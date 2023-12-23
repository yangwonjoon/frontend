import React from "react";
import filledStar from "../assets/filled_star.svg";

function MyComment() {
  return (
    <div className="mb-5 flex w-full flex-col items-start bg-white p-5 shadow-md">
      <div className="flex">
        <div className="mr-3 flex items-center justify-center">
          <span className="text-2xl text-[#325FFF] hover:cursor-pointer">
            TeamB 홍대점
          </span>
        </div>
        <div className="ml-1 flex-col items-center">
          <div className="flex items-center">
            <img src={filledStar} alt="star" className="w-3" />
            <span className="ml-1 text-sm">365</span>
          </div>
          <div className="flex">
            <div className=" w-1/3">
              <span className="text-sm text-[#5A5A5A]">한식, 일식</span>
            </div>
            <div className="ml-2 flex justify-start">
              <div className="mx-1 flex h-5 w-20 items-center justify-center rounded-2xl border-[1px] border-[#5A5A5A] bg-[#CCE7D0] text-xs text-[#5A5A5A]">
                소주 3000원
              </div>
              <div className="mx-1 flex h-5 w-20 items-center justify-center rounded-2xl border-[1px] border-[#5A5A5A] bg-[#e8e6b1] text-xs text-[#5A5A5A]">
                맥주 4000원
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex w-full items-center justify-between">
        <span className="text-lg">
          - 처음 가봤는데 지인들이 너무 만족했어요!
        </span>
        <div className="flex">
          <button
            type="button"
            className="ml-2 h-7 w-12 rounded-xl border-[1px] border-[#CFCFCF] bg-[#F3F3F3] text-sm"
          >
            수정
          </button>
          <button
            type="button"
            className="ml-2 h-7 w-12 rounded-xl border-[1px] border-[#CFCFCF] bg-[#F3F3F3] text-sm"
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyComment;
