import { Container, Row, Col } from "react-bootstrap";
import styles from "./Visi.module.css";
import { visi, misi, imgs } from "../../data/visi";
import VisiImg from "./VisiImg";

const Visi = () => {
    const misiList = misi.map((item) => {
        return <li key={item.id}>{item.isi}</li>;
    });

    return (
        <>
            <div className={`mb-5 ${styles.Bg}`}>
                <Container>
                    <Row className="pt-4 text-light">
                        <Col className={`${styles.Bottom}`}>
                            <h1
                                className={`
                                ${styles.Head} 
                                ${styles.Animated} 
                                ${styles.AnimatedFadeInUp} 
                                ${styles.FadeInUp}`}
                            >
                                Visi dan Misi
                            </h1>
                            <h1
                                className={`
                                font-weight-bold 
                                ${styles.AnimatedChild} 
                                ${styles.AnimatedFadeInUp} 
                                ${styles.FadeInUp} 
                                ${styles.TitleFont}`}
                            >
                                SMA Negeri 2 Kendal
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className="mb-4 pb-3">
                    <Col sm="8" className="d-flex align-items-center">
                        <div>
                            <h4 className="font-weight-bold mb-4">Visi</h4>
                            <p>"{visi}"</p>
                        </div>
                    </Col>
                    <Col sm="4">
                        <VisiImg imgA={imgs[0]} imgB={imgs[1]} imgC={imgs[2]} />
                    </Col>
                </Row>

                <Row>
                    <Col sm="8" className="d-flex align-items-center order-1">
                        <div className={styles.MarginLeft}>
                            <h4 className="font-weight-bold mb-4">Misi</h4>
                            <ol>{misiList}</ol>
                        </div>
                    </Col>
                    <Col
                        sm="4"
                        className="order-2 order-sm-first d-flex align-items-center"
                    >
                        <div>
                            <VisiImg
                                imgA={imgs[3]}
                                imgB={imgs[4]}
                                imgC={imgs[5]}
                            />
                        </div>
                    </Col>
                </Row>
                <p className="mb-0 pb-3 pt-2 pr-2 text-dark">
                    <small>*sumber gambar dari Unsplash</small>
                </p>
            </Container>
        </>
    );
};

export default Visi;
