import filledStar from "../../assets/filled_star.svg";
import marker from "../../assets/marker.svg";
import arrowDown from "../../assets/down_arrow.svg";
import { useNavigate } from "react-router-dom";

function Content({ data }) {

    //음식점 주소 보이는 주소 자르기
    function restaurantAddress(data) {
        const subAddress = data.address.split(' ');
        const restaurantAddress = '';

        return restaurantAddress.concat(subAddress[0], ' ', subAddress[1], ' ', subAddress[2], ' ', subAddress[3]);
    }

    const navigate = useNavigate()

    return (

        <div className="mt-5 flex h-auto w-full flex-col bg-white p-3">

            <div className="flex w-full items-center justify-between">
                <div className="flex flex-col items-start">
                    <div className="">
                        <span className="mr-3 text-xl text-[#325FFF] hover:cursor-pointer" onClick={() => (navigate(`detail/${data.restaurant_seq}`))}>
                            {/* 가게 이름 */}
                            {data.restaurantName}
                        </span>
                        <span className="text-[#5A5A5A]">
                            {data.category}
                        </span>
                    </div>
                    <div className="mt-1 flex items-baseline">
                        <div className="flex items-baseline">
                            <span className="text-[#444444]">
                                {/* 가게 위치 */}
                                {restaurantAddress(data)}
                            </span>
                            <img
                                src={arrowDown}
                                alt="arrow_down"
                                className="ml-2 w-3 hover:cursor-pointer"
                            />
                        </div>
                        <div className="ml-4 flex items-center">
                        </div>
                        <div className="ml-2 flex">
                            <div className="mx-1 h-5 w-20 justify-center items-center rounded-2xl border-[1px] border-[#5A5A5A] bg-[#D9D9D9] text-xs text-[#5A5A5A]">
                                {/* 소주 가격 */}
                                소주: {data.sojuPrice}
                            </div>
                            <div className="mx-1 h-5 w-20 justify-center items-center rounded-2xl border-[1px] border-[#5A5A5A] bg-[#D9D9D9] text-xs text-[#5A5A5A]">
                                {/* 맥주 가격 */}
                                맥주: {data.beerPrice}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <img src={marker} alt="marker" className="w-8 hover:cursor-pointer"
                        onClick={() => { window.open(`https://map.kakao.com/link/to/${data.restaurantName},${data.lat},${data.lon}`) }}
                    />
                </div>
            </div>
            <div className="mt-2 grid w-full grid-cols-4 justify-between gap-2">
                {
                    data.imageURLs.map(function (url, i) {
                        return (
                            <img
                                key={i}
                                src={url}
                                alt={`img${i}`}
                                className="h-24 w-36 rounded-lg object-cover object-center"
                                onClick={() => (navigate(`detail/${data.restaurant_seq}`))}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}



export default Content;