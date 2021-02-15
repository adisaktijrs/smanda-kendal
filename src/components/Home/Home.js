import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import data from "../../data/artikel";

const Home = () => {
    let articles = data.slice(0, 3).map((post) => {
        return (
            <Col sm={4} className="mt-4" key={post.id}>
                <Link to={"/post/" + post.id}>
                    <Card border="light" className={`${styles.Hov}`}>
                        <Card.Img
                            className={styles.CardImg}
                            variant="top"
                            src={post.img}
                        />
                        <Card.Body>
                            <Card.Title>{post.judul}</Card.Title>
                            <p className="card-text">
                                <small className="text-muted">
                                    {post.tanggal}
                                </small>
                            </p>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        );
    });

    return (
        <>
            <Container fluid className={`mb-4 ${styles.Size}`}>
                <Row className="mt-4 mb-4">
                    <Col>
                        <h2 className="font-weight-bold text-center mt-3">
                            Berita Terbaru
                        </h2>
                        <div className={styles.Dots}></div>
                    </Col>
                </Row>
                <Row className="mb-4">{articles}</Row>
            </Container>

            <Container fluid className={`mb-4 bg-secondary`}>
                <Row className={`${styles.MarginTop}`}>
                    <Col className={styles.Bg}>
                        <Row className={`mx-auto text-light mt-4 mb-3 ${styles.Size}`}>
                            <Col sm={6}>
                                <div>
                                    <p>asdsa</p>
                                    <p>asdsa</p>
                                    <p>asdsa</p>
                                    <p>asdsa</p>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div>
                                    <p>asdsa</p>
                                    <p>asdsa</p>
                                    <p>asdsa</p>
                                    <p>asdsa</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
