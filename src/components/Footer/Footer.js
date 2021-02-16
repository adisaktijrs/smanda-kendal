import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";
import logo from "../../assets/img/smanda.png";
import {
    FaPhoneAlt,
    FaFacebookSquare,
    FaInstagram,
    FaTwitter
} from "react-icons/fa";
import { HiMailOpen, HiLocationMarker } from "react-icons/hi";

const Footer = () => {
    return (
        <Container fluid className={`bg-dark pt-4 ${styles.Full}`}>
            <Row className={`text-light mx-auto ${styles.Size}`}>
                <Col className={`${styles.FullCol}`}>
                    <Row className="mb-3" style={{borderBottom: "1px solid #fff"}}>
                        <Col sm={4}>
                            <Row className="mt-3">
                                <Col xs={4}>
                                    <img
                                        className={styles.Img}
                                        src={logo}
                                        alt="logo"
                                    />
                                </Col>
                                <Col>
                                    <h3 className="font-weight-bold">SMA Negeri 2 Kendal</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Menjadikan Sekolah Bersih dan Sehat.</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="mb-4" sm={4}>
                            <p className="font-weight-bold text-center">
                                Hubungi Kami
                            </p>
                            <p className="mb-0 pb-0">
                                <FaPhoneAlt /> Telepon: 02943811028
                            </p>
                            <p className="mb-0 pb-0">
                                <HiMailOpen /> Email: smanda.kendal@gmail.com
                            </p>
                            <p className="mb-0 pb-0">
                                <HiLocationMarker /> Alamat: Jl. Kyai Tulus,
                                Jetis, Kendal
                            </p>
                        </Col>
                        <Col className="mb-4" sm={4}>
                            <p className="font-weight-bold text-center">
                                Ikuti Kami
                            </p>
                            <p className="mb-0 pb-0">
                                <FaFacebookSquare /> Facebook:{" "}
                                <a
                                    className="text-info"
                                    href="https://id-id.facebook.com/sman2kendalzone"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    SMA Negeri 2 Kendal
                                </a>
                            </p>
                            <p className="mb-0 pb-0">
                                <FaTwitter /> Twitter:{" "}
                                <a
                                    className="text-info"
                                    href="https://twitter.com/sman2kendal"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    @sman2kendal
                                </a>
                            </p>
                            <p className="mb-0 pb-0">
                                <FaInstagram /> Instagram:{" "}
                                <a
                                    className="text-info"
                                    href="https://www.instagram.com/sman2kendal/?hl=id"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    @sman2kendal
                                </a>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                        <p>Made with ❤️ by <a className="text-info" href="https://adisaktijrs.github.io/" target="_blank" rel="noreferrer">@adisaktijrs</a> </p>
                        <p className="mb-0"><small>Sebagian konten web ini berisikan infomasi 'dummy' atau bukan asli.</small></p>
                        <p><small>Web ini merupakan redesign dari web sekolah yang saya gunakan untuk keperluan saya belajar React dan React-Router.</small></p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
