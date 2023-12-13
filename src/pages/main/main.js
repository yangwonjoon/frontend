import Header from "../../components/Header";
import NavBar from "../../components/Nav";
import Footer from "../../components/Footer";
import Content from "../../components/Content";

import { useRecoilValueLoadable } from "recoil";
import { restaurantSelector } from "../../recoil/selectors/restaurantSeletor";

const Main = () => {

  //레스토랑 전체 데이터
  const dataLoadable = useRecoilValueLoadable(restaurantSelector);

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
      const data = dataLoadable.contents;
      return (

        <>
          <div className="flex flex-col items-center justify-center">
            <Header />
            <NavBar />
            {
              data.map(function (a, i) {
                return <Content key={i} i={i}></Content>
              })
            }
            {/* {console.log(dataLoadable)} */}
            <Footer />
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
