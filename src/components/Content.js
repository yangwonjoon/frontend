import star from "../assets/star.svg";
import filledStar from "../assets/filled_star.svg";
import marker from "../assets/marker.svg";
import arrowDown from "../assets/down_arrow.svg";
import sampleImage1 from "../assets/sampleImage1.png";
import sampleImage2 from "../assets/sampleImage2.png";
import sampleImage3 from "../assets/sampleImage3.png";
import sampleImage4 from "../assets/sampleImage4.png";

function Content({ i, data }) {

  return (
    <div className="mt-5 flex h-auto w-1/2 flex-col bg-white p-3">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-start">
          <div className="">
            <span className="mr-3 text-2xl text-[#325FFF] hover:cursor-pointer">
              {/* 가게 이름 */}
              {data[i].restaurantName}
            </span>
            <span className="text-[#5A5A5A]">일식</span>
          </div>
          <div className="mt-1 flex items-center">
            <div className="flex items-baseline">
              <span className="text-[#444444]">
                {/* 가게 위치 */}
                {data[i].address}
              </span>
              <img
                src={arrowDown}
                alt="arrow_down"
                className="ml-2 w-4 hover:cursor-pointer"
              />
            </div>
            <div className="ml-4 flex items-center">
              <img src={filledStar} alt="star" className="w-4" />
              <span className="ml-1 text-sm">0</span>
            </div>
            <div className="ml-3 flex">
              <div className="mx-2 h-6 w-24 rounded-2xl border-[1px] border-[#5A5A5A] bg-[#D9D9D9] text-sm text-[#5A5A5A]">
                {/* 소주 가격 */}
                소주: {data[i].sojuPrice}
              </div>
              <div className="h-6 w-24 rounded-2xl border-[1px] border-[#5A5A5A] bg-[#D9D9D9] text-sm text-[#5A5A5A]">
                {/* 맥주 가격 */}
                맥주: {data[i].beerPrice}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <img src={star} alt="star" className="mr-3 hover:cursor-pointer" />
          {data[i].bookmartCount}
          <img src={marker} alt="marker" className="hover:cursor-pointer" />
        </div>
      </div>
      <div className="mt-2 flex justify-between">
        <img
          src={sampleImage1}
          alt="sampleImage1"
          className="w-52 rounded-lg"
        />
        <img
          src={sampleImage2}
          alt="sampleImage2"
          className="ml-2 w-52 rounded-lg"
        />
        <img
          src={sampleImage3}
          alt="sampleImage3"
          className="ml-2 w-52 rounded-lg"
        />
        <img
          src={sampleImage4}
          alt="sampleImage4"
          className="ml-2 w-52 rounded-lg"
        />
      </div>
    </div>
  );
}



export default Content;
