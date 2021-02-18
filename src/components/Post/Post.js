import { useParams, useHistory, Link } from "react-router-dom";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";

import postData from "../../data/artikel";
import NotFound from "../404/NotFound";
import styles from "./Post.module.css";

const Post = () => {
    const { id } = useParams();
    const history = useHistory();

    const clickHandler = () => {
        history.push("/");
    };

    let selectedPost = postData.filter((post) => post.id === parseInt(id));
    if (selectedPost.length === 0) {
        return <NotFound />;
    }

    const isi = selectedPost[0].isi.split("\n").map((item, idx) => {
        return (
            <div key={idx} className="mb-3">
                {item}
                <br />
            </div>
        );
    });

    const beritaLain = postData.map(post => {
        return (
            <li key={post.id}>
                <Link to={`/post/${post.id}`} >{post.judul}</Link>
            </li>
        )
    });

    return (
        <>
            <div className={`${styles.Fill}`}>
                <img src={selectedPost[0].img} alt="post img" />
                <h2 className={`${styles.Title} ${styles.Animated} ${styles.AnimatedFadeInUp} ${styles.FadeInUp}`}>{selectedPost[0].judul}</h2>
            </div>
            <Container className={`mt-4 mb4 pb-4 mx-auto ${styles.Size}`}>
                <Row>
                    <Col md={8} className="mx-auto">
                        <Breadcrumb>
                            <Breadcrumb.Item onClick={clickHandler}>
                                Home
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Berita</Breadcrumb.Item>
                        </Breadcrumb>

                        {isi}
                        <p className="mt-3 mb-0">
                            <BsPencilSquare className="pb-1" />
                            Penulis: {selectedPost[0].penulis}
                        </p>
                        <p className="mb-4 pb-3">
                            <BiCalendar className="pb-1" />
                            Pada: {selectedPost[0].tanggal}
                        </p>
                    </Col>

                    <Col md={4} className="mx-auto">
                        <Breadcrumb>
                            <Breadcrumb.Item active>Berita Lain</Breadcrumb.Item>
                        </Breadcrumb>

                        <ul>
                            {beritaLain}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Post;
