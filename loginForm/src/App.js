import './App.css';
import LoginForm from "./component/LoginForm";
import LoginContainer from "./component/LoginContainer";
import Header from "./component/Header";
import Footer from "./component/Footer";

function ChildComp() {
    return <div>child component</div>
}
function App() {
    return (
        <div className="App">
            <LoginContainer>
                <Header />
                <LoginForm />
                <Footer />
            </LoginContainer>

        </div>
    );
}
export default App;