import Header from "../../components/Header";
import NavBar from "../../components/Nav";
import Footer from "../../components/Footer";
import Content from "../../components/Content";

import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { restaurantSelector } from "../../recoil/selectors/restaurantSeletor";
import { restaurantAtom } from "../../recoil/atoms/restaurantAtom";
import { useEffect } from "react";
import { sojuAtom } from "../../recoil/atoms/sojuAtom";

const Main = () => {

  //레스토랑 전체 데이터
  const dataLoadable = useRecoilValueLoadable(restaurantSelector);

  //레스토랑 전체 데이터 restaurantAtom에 저장
  // const [restaurantAt, setRestaurantAt] = useRecoilState(restaurantAtom)
  // useEffect(() => {
  //   setRestaurantAt(dataLoadable.contents)
  // }, [dataLoadable.contents])
  // const sojAt = useRecoilValue(sojuAtom)


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
      console.log(data)

      return (

        <>
          <div className="flex flex-col items-center justify-center">
            <Header />
            <NavBar />
            {
              data.map(function (a, i) {
                return <Content key={i} i={i} data={data}></Content>
              })
            }
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
