import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./layout/Main/Main";
import Footer from "./components/Footer/Footer";
// import ScrollToTop from "./utils/ScrollToTop"; finally i switched to use a package hehe
import ScrollMemory from 'react-router-scroll-memory';

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollMemory />
                <NavBar />
                <Main />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
