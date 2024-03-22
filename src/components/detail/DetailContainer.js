import { useNavigate } from "react-router-dom";
import cancel from "../../assets/cancel.svg";
import KakaoMap from "../common/KakaoMap";
import { useRecoilValue } from "recoil";
import { detailAtom } from "../../recoil/atoms/detailAtom";

function DetailContainer() {

    const navigate = useNavigate();
    //해당 가게 데이터
    const detailAt = useRecoilValue(detailAtom);

    return (
        <div className="mt-5 flex w-full flex-col items-center bg-[#F9F9F9] p-7">
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                    <div className="flex items-end">
                        <span className="ml-3 text-2xl text-[#325FFF] hover:cursor-pointer">
                            {detailAt.restaurantName}
                        </span>
                        <span className="ml-2 text-sm text-[#5A5A5A]">
                            {detailAt.category}
                        </span>
                    </div>
                </div>
                <img src={cancel} alt="cancel" className="w-5 hover:cursor-pointer" onClick={() => { navigate('/') }} />
            </div>
            <div className="mt-3 grid w-full grid-cols-2 gap-4">
                {detailAt.imageURLs.map((url, i) => (
                    <img
                        key={i}
                        src={url}
                        alt={`img${i + 1}`}
                        className="h-[300px] w-full hover:cursor-pointer
                        "
                    />
                ))}
            </div>
            <div className="mt-3 flex w-full items-center justify-start">
                <div className="flex h-8 w-32 items-center justify-center rounded-xl border-[1px] bg-[#CCE7D0] text-sm">
                    소주가격: {detailAt.sojuPrice}
                </div>
                <div className="ml-2 flex h-8 w-32 items-center justify-center rounded-xl border-[1px] bg-[#e8e6b1] text-sm">
                    맥주가격: {detailAt.beerPrice}
                </div>
            </div>
            <div className="mt-4 flex w-full flex-col items-start">
                <span className="text-lg font-medium text-[#444444]">
                    영업시간 :{detailAt.businessHours}
                </span>
                <span className="mt-4 text-lg font-medium text-[#444444]">
                    주소: {detailAt.address}
                </span>
            </div>
            <KakaoMap></KakaoMap>
        </div>
    );
}

export default DetailContainer;
