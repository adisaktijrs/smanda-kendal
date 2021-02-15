import { Container, Row, Col } from "react-bootstrap";

import styles from "./Header.module.css";

const Header = (props) => {
    return (
        <div className={styles.Bg}>
            <div className={`${styles.BgTop}`}>
            <Container fluid className={`${styles.Size}`}>
                <Row className="pt-4 text-light">
                    <Col className={styles.Bottom}>
                        <h1 className={styles.Head}>SMA Negeri 2 Kendal</h1>
                        <p>
                            Mengembangkan Jati Diri, Meraih Prestasi Tertinggi,
                            Melestarikan Budaya dan Berwawasan Lingkungan.
                        </p>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default Header;
