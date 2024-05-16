import React from "react"; 
import "../styles/home.css";
import {Container, Row, Col} from "reactstrap";
import heroImg from "../assets/images/kolkatabus01.jpg";
import heroImg02 from "../assets/images/kolkatabus.jpg";
import heroVideo from "../assets/images/busvideo.webm";
import worldImg from  "../assets/images/bus.png";
import experinceImg from "../assets/images/experience.png";

import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";

import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";

import Testimonials from "../components/Testimonial/Testimonials"

const Home = () => {
    return <>
    {/* =============== hero section start ================= */}
    <section>
        <Container>
            <Row>
                <Col lg="6">
                    <div className="hero__content">
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

    
    {/* =============== experience section start  ================= */}
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="experience__content">
                        <Subtitle subtitle={'Experience'}/>

                        <h2>
                            With our all experince <br/> we will serve you
                        </h2>
                        <p>
                            Adventure awaits just around the corner!
                        </p>
                    </div>

                    <div className="counter__wrapper d-flex align-items-center gap-5">
                        <div className="counter__box">
                            <span>8k+</span>
                            <h6>Successful trip</h6>
                        </div>

                        <div className="counter__box">
                            <span>2k+</span>
                            <h6>Regular clients</h6>
                        </div>

                        <div className="counter__box">
                            <span>5</span>
                            <h6>Years experience</h6>
                        </div>
                    </div>
                </Col>

                <Col lg="6">
                    <div className="experience_img">
                        <img src={experinceImg} alt="" />
                    </div>

                </Col>
            </Row>
        </Container>
    </section>

    {/* =============== experience section end  ================= */}



    {/* =============== gallery section start  ================= */}
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Gallery'}/>
                    <h2 className="gallery__title">Visit our customers travel gallery</h2>
                </Col>
                <Col lg='12'>
                    <MasonryImagesGallery/>
                </Col>
            </Row>
        </Container>
    </section>
    {/* =============== gallery section end  ================= */}



    {/* =============== testimonial section start  ================= */}
    <section>
        <Container>
            <Row>
                <Col lg="12">
                    <Subtitle subtitle={'Fans Love'} />
                    <h2 className="testimonial__title">What our fans say about us</h2>
                </Col>
                <Col lg="12">
                    <Testimonials/>
                </Col>
            </Row>
        </Container>
    </section>
    {/* =============== testimonial section end  ================= */}
    </>
};

export default Home;