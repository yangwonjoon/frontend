import Header from "../../components/Header";
import NavBar from "../../components/Nav";
import Footer from "../../components/Footer";
import Content from "../../components/Content";

const Main = () => (
  <div className="flex flex-col items-center justify-center">
    <Header />
    <NavBar />
    <Content />
    <Content />
    <Content />
    <Content />
    <Content />
    <Content />
    <Footer />
  </div>
);

export default Main;
