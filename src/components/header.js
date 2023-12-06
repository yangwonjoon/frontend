import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import magnify from "../assets/magnify.svg";
import person from "../assets/person.svg";

function Header() {

  const navigate = useNavigate()

  return (
    <div className="mt-1 flex h-24 w-1/2 items-start border-b-[1.5px] border-black">
      <div className="flex basis-1/3"></div>
      <div className="flex basis-1/3 items-center justify-center">
        <img
          src={logo}
          alt="logo"
          className="w-[200px] hover:cursor-pointer"
          onClick={() => { navigate('/') }}
        ></img>
      </div>
      <div className="flex basis-1/3 justify-end">
        <img
          src={magnify}
          alt="magnify"
          className="mr-5 mt-6 flex w-8 hover:cursor-pointer"
        />
        <img
          src={person}
          alt="person"
          className="mt-6 flex w-8 hover:cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Header;
