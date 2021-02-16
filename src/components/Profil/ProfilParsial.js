import { Container, Row, Col } from "react-bootstrap";
import styles from "./ProfilParsial.module.css";

const ProfilParsial = ({type, postA, postB, imgSrc}) => {
    let classesA = "d-flex align-items-center";
    let classesB = `${styles.DivImg}`;

    if (type === 2) {
        classesA = "order-1 d-flex align-items-center";
        classesB = `order-2 order-md-first ${styles.DivImg}`;
    }

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={6} className={classesA}>
                        <div className={styles.PaddingDiv}>
                            <p className="mt-4 pt-3">{postA}</p>
                            <p className="mb-4 pb-3">{postB}</p>
                        </div>
                    </Col>
                    <Col md={6} className={classesB}>
                        <img
                            src={imgSrc}
                            alt="foto profil"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProfilParsial;
