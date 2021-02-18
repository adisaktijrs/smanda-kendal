import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import logo from "../../assets/img/smanda.png";
import styles from "./NavBar.module.css";

const NavBar = () => {
    const [openToggle, setOpenToggle] = useState(false);

    const toggleHandler = () => setOpenToggle(!openToggle);
    const closeNavHandler = () => setOpenToggle(false);

    return (
        <Navbar
            expand="lg"
            className={`pt-2 ${styles.BlurBackground}`}
            variant="light"
            expanded={openToggle}
            sticky="top"
        >
            <Container>
                <Link to="/">
                    <Navbar.Brand onClick={closeNavHandler}>
                        <img
                            src={logo}
                            height={35}
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
                    onClick={toggleHandler}
                    className={styles.Toggle}
                    aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto font-weight-bold">
                        <Link
                            className={`pr-3 ${styles.Black} ${styles.CenterNavItem}`}
                            to="/profil"
                            onClick={closeNavHandler}
                        >
                            Profil
                        </Link>
                        <Link
                            className={`pr-3 ${styles.Black} ${styles.CenterNavItem}`}
                            to="/visi"
                            onClick={closeNavHandler}
                        >
                            Visi & Misi
                        </Link>
                        <Link
                            className={`pr-3 ${styles.Black} ${styles.CenterNavItem}`}
                            to="/hubungi"
                            onClick={closeNavHandler}
                        >
                            Hubungi Kami
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
