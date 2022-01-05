import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    // let data = new Date();
    // let year = date.getFullYear();

    return (
        <Container fluid className='footer px-5'>
            <Row>
                {/* <Col className='d-flex col-5 justify-content-start'>
                <p className='text-uppercase cmb-cr'>{year} John Young</p>
                </Col> */}

                <Col className='d-flex col-12 justify-content-end'>
                    <a className='cmb-fa m-2' href='https://www.linkedin.com/in/john-young-uofubootcamp-fullstack-developer/' target='_blank' rel="noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a className='cmb-fa m-2' href='https://github.com/jyoung0613/React-Port' target='_blank' rel="noreferrer">
                        <FaGithub />
                    </a>
                    <a className='cmb-fa m-2' href='mailto:jwyoung0613@gmail.com?subject=Contact from Portfolio Site' target='_blank' rel="noreferrer">
                        <FaEnvelope />
                    </a>
                </Col>

            </Row>
        </Container>
    );
}

export default Footer;