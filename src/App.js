import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./layout/Main/Main";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Main />
            </Router>
        </div>
    );
}

export default App;
