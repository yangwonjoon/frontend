import Header from "../../components/common/Header";
import NavBar from "../../components/common/Nav";
import Footer from "../../components/common/Footer";
import Content from "../../components/main/Content"
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { restaurantSelector } from "../../recoil/selectors/restaurantSeletor";
import { filteredDataSelector } from "../../recoil/selectors/filteredDataSelector";
import { searchAtom } from "../../recoil/atoms/searchAtom";


const Main = () => {

  //검색창 데이터
  const searchAt = useRecoilValue(searchAtom)
  //전체 데이터
  const dataLoadable = useRecoilValueLoadable(restaurantSelector);
  //필터링 데이터
  const filterdataLoadable = useRecoilValueLoadable(filteredDataSelector)




  //dataLoadable -> loading, hasValue, hasError
  switch (dataLoadable.state) {
    //로딩중일경우
    case 'loading':
      return (
        <>
          로딩중입니다
        </>
      );

    //값이 들어온경우
    case 'hasValue':

      //필터 데이터 있으면 필터링 데이터로(거의 필터링 데이터임)
      const data = filterdataLoadable.contents || dataLoadable.contents

      return (

        <>
          <div className="flex flex-col items-center justify-center">
            <Header />
            <NavBar />
            {data.length > 0 ? (
              // 필터링된 데이터가 있을 경우
              data.map(function (a, i) {
                return <Content key={i} data={a}></Content>;
              })
            ) :
              //필터링 데이터가 없을 경우
              data.length === 0 ?
                (
                  <div>
                    결과값이 없습니다
                  </div>
                )
                :
                (
                  // 로딩 중
                  <div>
                    필터링중입니다
                  </div>
                )}

            < Footer />
          </div >
        </>

      );

    //에러가 뜬 경우
    case 'hasError':
      return (
        <>
          페이지를 찾을수 없습니다
        </>
      );
    default:
      return null;
  }
}

export default Main;
