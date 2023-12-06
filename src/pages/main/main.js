import Header from "../../components/header";
import NavBar from "../../components/nav";
import Footer from "../../components/footer";
import Content from "../../components/Content";
import { restaurantData } from '../../recoil/atoms/restaurantData.js'

import { useState } from "react";
import { atom, useRecoilState } from "recoil";

const Main = () => {

  //가게 데이터
  const [data, setData] = useRecoilState(restaurantData);

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
        <Footer />
      </div >
    </>

  );
}


export default Main;
