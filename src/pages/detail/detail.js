import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetailContainer from "../../components/DetailContainer";
import { useRecoilState, useRecoilValue } from "recoil";
import { detailAtom } from "../../recoil/atoms/detailAtom"
import { restaurantSelector } from "../../recoil/selectors/restaurantSeletor";
import { useEffect } from "react";

function Detail() {

  //전체 데이터
  const restaurantSel = useRecoilValue(restaurantSelector)

  let { id } = useParams();
  const [detailAt, setDetailAt] = useRecoilState(detailAtom);

  //url parma과 전체데이터중 맞는 데이터 res에 저장
  let res = restaurantSel.find(function (x) {
    return x.restaurantName == id
  });

  useEffect(() => {

    //detailAtom에 res값 저장
    if (res) {
      setDetailAt((prev) => ({
        ...prev,
        ...res,
      }));
    }

  }, [res, setDetailAt])

  // 비동기 처리 중 컴포넌트가 언마운트되었는지 확인하기 위한 변수
  // const isMounted = useRef(true);

  // useEffect(() => {
  //   // 컴포넌트가 마운트되어 있음을 나타냄
  //   isMounted.current = true;

  //   // useEffect 내에서 비동기 작업 수행
  //   const fetchData = async () => {
  //     try {
  //       let res = restaurantSel.find((x) => x.restaurantName === id);

  //       // 컴포넌트가 마운트된 경우에만 상태 업데이트
  //       if (isMounted.current && res) {
  //         setDetailAt((prev) => ({
  //           ...prev,
  //           ...res,
  //         }));
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();

  //   // cleanup 함수에서 컴포넌트가 언마운트되었음을 나타냄
  //   return () => {
  //     isMounted.current = false;
  //   };
  // }, [id, restaurantSel, setDetailAt]);

  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <DetailContainer />
      <Footer />
    </div>
  );
}

export default Detail;

