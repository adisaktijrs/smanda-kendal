import {Row, Col} from "react-bootstrap";
import styles from "./VisiImg.module.css";

const VisiImg = ({imgA, imgB, imgC}) => {
    return (
        <>
            <Row>
                <Col className="pl-0 pr-0">
                    <img
                        className={styles.Img}
                        src={imgA}
                        alt="img"
                    />
                </Col>
            </Row>
            <Row>
                <Col className="pl-0 pr-0">
                    <img
                        className={styles.Img}
                        src={imgB}
                        alt="img"
                    />
                </Col>
                <Col className="pl-0 pr-0">
                    <img
                        className={styles.Img}
                        src={imgC}
                        alt="img"
                    />
                </Col>
            </Row>
        </>
    );
};

export default VisiImg;
