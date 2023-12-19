import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoginContainer from "../../components/LoginContainer"

function login(){
    return(
        <div className="flex flex-col items-center justify-center">
            <Header />
            <LoginContainer />
            <Footer />
        </div>
    )

}

export default login;