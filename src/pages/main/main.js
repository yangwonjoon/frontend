
import Header from "../../components/common/Header";
import NavBar from "../../components/common/Nav";
import Footer from "../../components/common/Footer";
import Content from "../../components/main/Content";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { restaurantSelector } from "../../recoil/selectors/restaurantSeletor";
import { useLocation } from "react-router-dom";
import { restaurantAtom } from "../../recoil/atoms/restaurantAtom";
import { useEffect } from "react";


export default Main