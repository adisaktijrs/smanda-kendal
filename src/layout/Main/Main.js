import { Switch, Route } from "react-router-dom";
import Home from "../../components/Home/Home";
import Profil from "../../components/Profil/Profil";
import Visi from "../../components/Visi/Visi";
import Hubungi from "../../components/Hubungi/Hubungi";
import Header from "../../layout/Header/Header";


const Main = (props) => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Header />
                    <Home />
                </Route>
                <Route path="/profil">
                    <Profil />
                </Route>
                <Route path="/visi">
                    <Visi />
                </Route>
                <Route path="/hubungi">
                    <Hubungi />
                </Route>
                <Route path="/post/:id">
                    <Hubungi />
                </Route>
            </Switch>
        </>
    );
};

export default Main;
