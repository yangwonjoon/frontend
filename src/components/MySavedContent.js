import React from "react";
import filledStar from "../assets/filled_star.svg";
import X from "../assets/mypageX.svg";

function MyContent() {
  return (
    <div className="relative mb-5 flex h-24 w-full flex-row bg-white p-6 shadow-md">
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
        <div className="flex items-center">
          <div className="w-1/3">
            <span className="text-[#5A5A5A] text-sm">한식, 일식</span>
          </div>
          <div className="ml-2 flex justify-start">
            <div className="flex justify-center items-center mx-1 h-5 w-20 rounded-2xl border-[1px] border-[#5A5A5A] bg-[#CCE7D0] text-xs text-[#5A5A5A]">
              소주 3000원
            </div>
            <div className="flex justify-center items-center mx-1 h-5 w-20 rounded-2xl border-[1px] border-[#5A5A5A] bg-[#e8e6b1] text-xs text-[#5A5A5A]">
              맥주 4000원
            </div>
          </div>
        </div>
      </div>
      <img
        src={X}
        alt="x"
        className="absolute right-3 top-4 w-4 hover:cursor-pointer"
      />
    </div>
  );
}

export default MyContent;
