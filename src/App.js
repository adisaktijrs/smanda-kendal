import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./layout/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Main />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
