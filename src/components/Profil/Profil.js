import { Container, Row, Col } from "react-bootstrap";
import styles from "./Profil.module.css";
import { profil as dataProfile, imgs } from "../../data/profil";
import ProfilParsial from "./ProfilParsial";

const Profil = () => {
    const profilParsial = dataProfile.slice(0, 5).map((item, idx) => {
        return (
            <ProfilParsial
                key={idx}
                type={idx % 2 === 0 ? 1 : 2}
                postA={dataProfile[parseInt(idx * 2)].isi}
                postB={dataProfile[parseInt(idx * 2 + 1)].isi}
                imgSrc={imgs[idx]}
            />
        );
    });

    return (
        <>
            <div className={styles.Bg}>
                <Container fluid className={`${styles.Size}`}>
                    <Row className="pt-4 text-light">
                        <Col className={`${styles.Bottom}`}>
                            <h1
                                className={`${styles.Head} ${styles.Animated} ${styles.AnimatedFadeInUp} ${styles.FadeInUp}`}
                            >
                                Profil
                            </h1>
                            <h1
                                className={`font-weight-bold ${styles.AnimatedChild} ${styles.AnimatedFadeInUp} ${styles.FadeInUp} ${styles.TitleFont}`}
                            >
                                SMA Negeri 2 Kendal
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            {profilParsial}
            <div className="bg-secondary">
                <Container>
                    <p className="mb-0 pb-2 pt-2 pl-2 pr-2 text-center text-light">
                        <small>*sumber gambar dari Unsplash</small>
                    </p>
                </Container>
            </div>
        </>
    );
};

export default Profil;
