import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Map, MapMarker, MapInfoWindow } from "react-kakao-maps-sdk"
import { detailAtom } from "../../recoil/atoms/detailAtom";

function KakaoMap() {

    const detailAt = useRecoilValue(detailAtom);

    // const [state, setState] = useState({
    //     center: {
    //         lat: 33.450701,
    //         lng: 126.570667,
    //     },
    //     errMsg: null,
    //     isLoading: true,
    // })

    // useEffect(() => {
    //     if (navigator.geolocation) {
    //         // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    //         navigator.geolocation.getCurrentPosition(
    //             (position) => {
    //                 setState((prev) => ({
    //                     ...prev,
    //                     center: {
    //                         lat: position.coords.latitude, // 위도
    //                         lng: position.coords.longitude, // 경도
    //                     },
    //                     isLoading: false,
    //                 }))
    //             },
    //             (err) => {
    //                 setState((prev) => ({
    //                     ...prev,
    //                     errMsg: err.message,
    //                     isLoading: false,
    //                 }))
    //             }
    //         )
    //     } else {
    //         // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    //         setState((prev) => ({
    //             ...prev,
    //             errMsg: "geolocation을 사용할수 없어요..",
    //             isLoading: false,
    //         }))
    //     }
    // }, [])

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

                {/* {!state.isLoading && (
                    <MapMarker position={state.center}>
                        <div style={{ padding: "5px", color: "#000" }}>
                            {state.errMsg ? state.errMsg : "여기에 계신가요?!"}
                        </div>
                    </MapMarker>
                )} */}

            </Map >

        </>
    )
}

export default KakaoMap;