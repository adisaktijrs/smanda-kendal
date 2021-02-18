import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Hubungi = () => {
    useEffect(() => {
        document.title = "Hubungi Kami | SMANDA";
    }, []);

    return (
        <Container>
            <Row>
                <Col className="mt-4 mb-4">
                    <h3 className="font-weight-bold mb-3">Hubungi Kami</h3>
                    <p className="mb-0">Telepon: 02943811028</p>
                    <p className="mb-0">Email: smanda.kendal@gmail.com</p>
                    <p className="mb-0">
                        Alamat: Jl. Kyai Tulus, Jetis, Kendal, Jawa Tengah.
                    </p>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7921.473125033048!2d110.190858!3d-6.922063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x63eb00914dd586b4!2sSMA%20Negeri%202%20Kendal!5e0!3m2!1sid!2sid!4v1613634555500!5m2!1sid!2sid"
                        width="100%"
                        height="450"
                        style={{ backgroundColor: "gray" }}
                        frameBorder="0"
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </Col>
            </Row>
        </Container>
    );
};

export default Hubungi;
