import Header from "../../components/header";
import Footer from "../../components/footer";
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
