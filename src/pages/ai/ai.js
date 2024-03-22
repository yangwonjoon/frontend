import AiContainer from "../../components/main/AiContainer";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";

function AI() {

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <Header />
                <AiContainer />
                <Footer />
            </div>
        </>
    );
}

export default AI;