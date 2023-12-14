import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetailContainer from "../../components/DetailContainer";

function detail() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <DetailContainer />
      <Footer />
    </div>
  );
}

export default detail;
