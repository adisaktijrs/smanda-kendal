import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


import logo from "../../assets/img/smanda.png";
import styles from "./NavBar.module.css";

const NavBar = () => {
    // let imgSize = window.innerWidth > 991 ? 60 : 40;
    return (
        <Navbar
            bg="white"
            expand="lg"
            className={`pt-2 ${styles.BorderTop}`}
            variant="light"
        >
            <Link to="/">
                <Navbar.Brand>
                    <img
                        src={logo}
                        height={40}
                        className={`d-inline-block align-top pr-2 ${styles.BorderRight}`}
                        alt="React Bootstrap logo"
                    />
                    <span>
                        <div className={`${styles.Title} ${styles.Top}`}>
                            SMANDA
                        </div>
                        <div className={`${styles.Title} ${styles.Bottom}`}>
                            KENDAL
                        </div>
                    </span>
                </Navbar.Brand>
            </Link>

            <Navbar.Toggle
                className={styles.Toggle}
                aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto font-weight-bold">
                    <Link className="pr-3 text-muted" to="/profil">
                        Profil
                    </Link>
                    <Link className="pr-3 text-muted" to="/visi">
                        Visi & Misi
                    </Link>
                    <Link className="pr-3 text-muted" to="/hubungi">
                        Hubungi Kami
                    </Link>
                </Nav>
            </Navbar.Collapse>

            
        </Navbar>
    );
};

export default NavBar;
