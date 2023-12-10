import Header from "../../components/header";
import NavBar from "../../components/nav";
import Footer from "../../components/footer";
import Content from "../../components/Content";
import { restaurantData } from '../../recoil/selectors/restaurantData.js'

import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import axios from 'axios';

const Main = () => {

  //가게 데이터
  const [data, setData] = useRecoilState(restaurantData);

  // useEffect(() => {
  //   axios.get("http://localhost:3000/data/sample.json")
  //     .then((res) => { console.log(res.data) })
  //     .catch((error) => { console.log(error) })
  // }, [])


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
