import star from "../assets/star.svg";
import filledStar from "../assets/filled_star.svg";
import marker from "../assets/marker.svg";
import arrowDown from "../assets/down_arrow.svg";
import { useNavigate } from "react-router-dom";
import { RecoilState, useRecoilState } from "recoil";


function Content({ i, data }) {

  const navigate = useNavigate()


  return (

    <div className="mt-5 flex h-auto w-full flex-col bg-white p-3">

      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-start">
          <div className="">
            <span className="mr-3 text-xl text-[#325FFF] hover:cursor-pointer" onClick={() => (navigate(`detail/${data[i].restaurant_seq}`))}>
              {/* 가게 이름 */}
              {data[i].restaurantName}
            </span>
            <span className="text-[#5A5A5A]">일식</span>
          </div>
          <div className="mt-1 flex items-baseline">
            <div className="flex items-baseline">
              <span className="text-[#444444]">
                {/* 가게 위치 */}
                {data[i].address}
              </span>
              <img
                src={arrowDown}
                alt="arrow_down"
                className="ml-2 w-3 hover:cursor-pointer"
              />
            </div>
            <div className="ml-4 flex items-center">

              <img src={filledStar} alt="star" className="w-3" />
              <span className="ml-1 text-xs">
                {/* 찜하기 */}
                {data[i].bookmarkCount}
              </span>

            </div>
            <div className="ml-2 flex">
              <div className="mx-1 h-5 w-20 justify-center items-center rounded-2xl border-[1px] border-[#5A5A5A] bg-[#D9D9D9] text-xs text-[#5A5A5A]">
                {/* 소주 가격 */}
                소주: {data[i].sojuPrice}
              </div>
              <div className="mx-1 h-5 w-20 justify-center items-center rounded-2xl border-[1px] border-[#5A5A5A] bg-[#D9D9D9] text-xs text-[#5A5A5A]">
                {/* 맥주 가격 */}
                맥주: {data[i].beerPrice}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <img src={star} alt="star" className="mr-3 w-6 hover:cursor-pointer" />
          <img src={marker} alt="marker" className="w-8 hover:cursor-pointer"
            onClick={() => { window.open(`https://map.kakao.com/link/to/${data[i].restaurantName},${data[i].lat},${data[i].lon}`) }}
          />
        </div>
      </div>
      <div className="mt-2 grid w-full grid-cols-4 justify-between gap-2">
        {
          data[i].imageURLs.map(function (url, i) {
            return (
              <img
                key={i}
                src={url}
                alt={`img${i}`}
                className="rounded-lg"
                onClick={() => (navigate(`detail/${data[i].restaurant_seq}`))}
              />
            )
          })
        }
      </div>
    </div>
  );
}



export default Content;
