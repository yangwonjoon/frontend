import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import magnify from "../../assets/magnify.svg";
import person from "../../assets/person.svg";
import { useState } from "react";
import SearchModal from "../main/SearchModal";
import { useRecoilState } from "recoil";
import { userAtom } from "../../recoil/atoms/userAtom";

function Header() {
  const [searchClicked, setSearchClicked] = useState(false);
  const navigate = useNavigate();

  // const session = sessionStorage.getItem('user')
  //console.log(JSON.parse(session).id)//value만

  const searchClickHandler = () => {
    setSearchClicked(!searchClicked);
  };

  return (
    <div className="mt-1 flex h-24 w-full items-start border-b-[1.5px] border-black">
      <div className="flex basis-1/3"></div>
      <div className="flex basis-1/3 items-center justify-center">
        <img
          src={logo}
          alt="logo"
          className="w-[200px] hover:cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            navigate("/")
          }}
        ></img>
      </div>
      <div className="flex basis-1/3 justify-end">
        <img
          src={magnify}
          alt="magnify"
          className="mr-5 mt-6 flex w-8 hover:cursor-pointer"
          onClick={() => {
            setSearchClicked(true);
          }}
        />
        <img
          src={person}
          alt="person"
          className="mt-6 flex w-8 hover:cursor-pointer"
          onClick={() => {
            navigate('/login')
          }}
        />
      </div>
      {searchClicked && <SearchModal onCancelClick={searchClickHandler} />}
    </div>
  );
}

export default Header;