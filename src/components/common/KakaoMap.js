import { useRecoilValue } from "recoil";
import { Map, MapMarker } from "react-kakao-maps-sdk"
import { detailAtom } from "../../recoil/atoms/detailAtom";

function KakaoMap() {

    const detailAt = useRecoilValue(detailAtom);

    return (
        <>
            <Map
                center={{ lat: detailAt.lat, lng: detailAt.lon }} // 지도의 중심좌표
                style={{ width: "100%", height: "360px", marginTop: "20px", marginBottom: "10px" }}// 지도의 크기
                level={3} // 지도의 확대 레벨
            >
                <MapMarker
                    position={{ lat: detailAt.lat, lng: detailAt.lon }}>
                    <div style={{ color: "#000", padding: "5px", textAlign: "center" }}><span>{detailAt.restaurantName}</span></div>
                </MapMarker>
            </Map >
        </>
    )
}

export default KakaoMap;