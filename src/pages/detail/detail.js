
import { useParams } from "react-router-dom";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import DetailContainer from "../../components/detail/DetailContainer";
import { useRecoilState, useRecoilValue } from "recoil";
import { detailAtom } from "../../recoil/atoms/detailAtom"
import { restaurantSelector } from "../../recoil/selectors/restaurantSeletor";
import { useEffect } from "react";

function Detail() {

  //전체 데이터
  const restaurantSel = useRecoilValue(restaurantSelector)

  let { id } = useParams();
  //클릭한 가게 데이터
  const [detailAt, setDetailAt] = useRecoilState(detailAtom);

  useEffect(() => {
    try {
      let res = restaurantSel.find(function (x) {
        return x.restaurant_seq == id;
      });
      if (res) {
        setDetailAt((prev) => ({
          ...prev,
          ...res,
        }));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <DetailContainer />
      <Footer />
    </div>
  );
}



export default Detail;

