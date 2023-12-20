import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { detailAtom } from "../../recoil/atoms/detailAtom";

const { kakao } = window;

function KakaoMap() {

    const detailAt = useRecoilValue(detailAtom);
    console.log(detailAt.lat, detailAt.lon)//lat: 위도, lon: 경도

    // 마커를 표시할 위치와 title 객체 배열입니다 
    var positions = [
        {
            restaurantTitle: detailAt.restaurantName,
            restauranrLatlng: new kakao.maps.LatLng(detailAt.lat, detailAt.lon)
        },
    ];

    useEffect(() => {
        const container = document.getElementById('map');
        const options = { //지도 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(detailAt.lat, detailAt.lon), //지도 중심 좌표
            level: 3 //지도 확대, 축소 정도
        }
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴



        // 마커가 표시될 위치
        var markerPosition = new kakao.maps.LatLng(detailAt.lat, detailAt.lon);

        // 마커를 생성
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정
        marker.setMap(map);

        var iwContent = `<div style="padding:5px;">${detailAt.restaurantName}</div>`
        // `< a href = "https://map.kakao.com/link/map/${detailAt.restaurantName},${detailAt.lat},${detailAt.lon}" style = "color:blue" target = "_blank>큰지도보기</a> 
        //     < a href = "https://map.kakao.com/link/to/${detailAt.restaurantName},${detailAt.lat},${detailAt.lon}" style = "color:blue" target = "_blank" > 길찾기</a></div>` 


        // 인포윈도우를 생성
        var infowindow = new kakao.maps.InfoWindow({
            position: markerPosition,
            content: iwContent
        });

        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시
        infowindow.open(map, marker);

    }, [detailAt])



    return (
        <>
            <div id="map" style={{ width: "550px", height: "300px", marginTop: "20px", marginBottom: "10px" }}></div>
        </>
    )
}

export default KakaoMap;