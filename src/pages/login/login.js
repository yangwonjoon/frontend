import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import LoginContainer from "../../components/login/LoginContainer"

function login() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Header />
            <LoginContainer />
            <Footer />
        </div>
    )

}

export default login;