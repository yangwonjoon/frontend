import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import MyPageContainer from "../../components/MyPageContainer"

const Mypage = () => (
  <div className="flex flex-col items-center justify-center">
    <Header />
    <MyPageContainer />
    <Footer />
  </div>
);

export default Mypage;
