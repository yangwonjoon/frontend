import Header from "../../components/header";
import Footer from "../../components/footer";
import MyPageContainer from "../../components/MyPageContainer"

const Mypage = () => (
  <div className="flex flex-col items-center justify-center">
    <Header />
    <MyPageContainer />
    <Footer />
  </div>
);

export default Mypage;
