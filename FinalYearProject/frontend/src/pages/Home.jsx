import React from "react"; 
import "../styles/home.css";
import {Container, Row, Col} from "reactstrap";
import heroImg from "../assets/images/kolkatabus01.jpg";
import heroImg02 from "../assets/images/kolkatabus.jpg";
import heroVideo from "../assets/images/busvideo.webm";
import worldImg from  "../assets/images/bus.png";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";

import ServiceList from "../services/ServiceList";

const Home = () => {
    return <>
    {/* =============== hero section start ================= */}
    <section>
        <Container>
            <Row>
                <Col lg="6">
                    <div className="hero__contemt">
                        <div className="hero__subtitle d-flex align-items-center ">
                            <Subtitle subtitle ={"Know before you go"} />
                            <img src={worldImg} alt="" />
                        </div>
                        <h1>Skip the queues, book buses  <span className="highlight">easily</span> </h1>
                        <p>
                        Welcome to our bus booking platform, where convenience meets efficiency. 
                        Say goodbye to long queues and endless phone calls; with just a few clicks, 
                        you can book your bus tickets hassle-free. 
                        Our user-friendly interface allows you to browse through various routes, 
                        select your preferred seats, and secure your journey within minutes. 
                        Whether you're planning a solo trip or a group outing, 
                        we've got you covered with a wide range of bus options to suit your needs. 
                        Join the thousands of satisfied travelers who trust us for their transportation needs. 
                        Book your next bus journey with us and experience seamless travel like never before.
                        </p>
                    </div>
                </Col>

                <Col lg="2">
                    <div className="hero__img-box">
                        <img src={heroImg} alt="" />
                    </div>
                </Col>
                <Col lg="2">
                    <div className="hero__img-box mt-4">
                        <video  src={heroVideo} alt="" controls />
                    </div>
                </Col>
                <Col lg="2">
                    <div className="hero__img-box mt-5">
                        <img src={heroImg02} alt="" />
                    </div>
                </Col>

                <SearchBar />
            </Row>
        </Container>
    </section>
    {/* =============== hero section end  ================= */}


    <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className="services_subtitle">What we serve</h5>
                    <h2 className="services_title">We offer our best serve</h2>
                </Col>
                <ServiceList/>
            </Row>
        </Container>
    </section>
    </>
};

export default Home;