import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import data from "../../data/artikel";
import sambutan from "../../data/sambutan";

const Home = () => {
    let articles = data.slice(0, 3).map((post) => {
        return (
            <Col sm={4} className="mt-4" key={post.id}>
                <Link to={"/post/" + post.id} className={styles.HovText}>
                    <Card border="light" className={`${styles.Hov}`}>
                        <Card.Img
                            className={styles.CardImg}
                            variant="top"
                            src={post.img}
                        />
                        <Card.Body>
                            <Card.Title className="font-weight-bold text-dark">
                                {post.judul}
                            </Card.Title>
                            <p className="card-text">
                                <small className={`text-muted`}>
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
            <Container>
                <Row className="mt-4 mb-4">
                    <Col>
                        <h2 className="font-weight-bold text-center mt-3">
                            Berita Terbaru
                        </h2>
                        <div className={styles.Dots}></div>
                    </Col>
                </Row>
                <Row className="mb-4 pb-4">{articles}</Row>
            </Container>

            <div className="bg-secondary">
                <Container className="pl-0 pr-0 pb-0 mb-0">
                    <Row className={`mx-auto text-light mb-3 ${styles.Mobile}`}>
                        <Col>
                            <h2 className="font-weight-bold mt-4">
                                {sambutan[0].judul}
                            </h2>
                        </Col>
                    </Row>
                    <Row
                        className={`mx-auto text-light mt-2 pb-3 ${styles.Size}`}
                    >
                        <Col sm={8} className="order-2 order-lg-first">
                            <div>
                                <p>Assalamu'alaikum wr.wb.</p>
                                <p>{sambutan[0].isi}</p>
                                <p>Wassalamu'alaikum wr.wb.</p>
                            </div>
                        </Col>
                        <Col sm={4} className="order-1">
                            <div>
                                <img
                                    className={styles.Img}
                                    src={sambutan[0].img}
                                    alt="Kepala sekolah"
                                />
                            </div>
                            <p className="font-weight-bold text-center mt-3">
                                NOOR MOHAMAD ABIDUN, S.PD., M.SI
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Home;
