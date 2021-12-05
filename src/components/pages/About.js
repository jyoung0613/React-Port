import React from 'react';
import Headshot from "../../assets/Headshot-Square.jpg";
import { Container, Row } from 'react-bootstrap';

export default function About() {
    return (
        <Container>
            <section id='about'>
                <Row>
                    <div className='col-sm-6 col-md-2 pr-3 mb-4'>
                        <figure className='figure-image'>
                            <img src={Headshot} alt='Headshot of John wearing a button-up shirt and looking at the camera.'  className='img-fluid mb-3 cmb-headshot'/>
                        </figure>
                    </div>
                    <div className='col-sm-12 col-md-9 mr-2 mb-4'>
                        <h1>Hello, and welcome!</h1>
                        <p>My name is John and I am a Junior Software Developer leveraging accounts payable and operational management background to build better workflow applications.</p>
                        <p>I recently completed the University of Utah Coding Bootcamp, with newly developed skills in React, JavaScript, Node.js, Express.js, MongoDb, and MVC Framework design.</p>
                        <p>I love knowledge and I love to be challenged when working.  I believe that personal growth comes through these times of challenge, and I look forward to that growth.</p>
                        <p>Each project I work on just furthers that search for knowledge and betters not only everything I work on, but also in my life.  I recently worked on a project to build an intuitive website marketplace for the sale of electronic items.</p>
                        <p>I worked in a group of 5 to develop this multi-page site to allow users the access to generate item listings with full details of the product and its cost.</p>
                        <p>I am excited to leverage my recently aquired skills along with my years of work as an accounts payables operations manager.</p>
                    </div>
                </Row>

                <Row>
                <div className='cmb-neutralblock p-4'>
                    <h4>Could we work well together?</h4>
                    <p>
                        I look forward to joining a team with a company that will help push me to learn quickly, provide a large group of inspirational mentors, and allow me to gain valuable experience.  Durinig my new journey, adding to this portfolio page, will keep anyone intrested with continual updates of my growing skillset.
                        If it seems like we might work well together, please reach out to me!  I look forward to hearing from you.
                    </p>
                </div>
                </Row>
            </section>
        </Container>
    );
}