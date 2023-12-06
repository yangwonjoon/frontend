import Header from "../../components/header";
import NavBar from "../../components/nav";
import Footer from "../../components/footer";
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
