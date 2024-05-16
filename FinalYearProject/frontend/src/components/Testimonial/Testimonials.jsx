import React from "react";
import Slider from 'react-slick'
import ava01 from "../../assets/images/ava-1.jpg"
import ava02 from "../../assets/images/ava-2.jpg"
import ava03 from "../../assets/images/ava-3.jpg"
import ava04 from "../../assets/images/ava-4.png"
import ava05 from "../../assets/images/ava-5.png"

const Testimonials = () => {

        const settings ={
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 1000,
            swipeToSlide: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,

            responsive:[
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        }

    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>"I never knew bus travel could be this luxurious until I booked with Dream Travels. From the plush seats to the attentive service, every moment was a delight. Highly recommended!"</p>


            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h5 className="mb-0 mt-3">John Doe</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>


        <div className="testimonial py-4 px-3">
            <p>"What a pleasant surprise! Traveling with Dream Travels felt more like a first-class flight than a bus journey. The comfortable seating, onboard amenities, and smooth ride made for an unforgettable experience."</p>


            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h5 className="mb-0 mt-3">Lia Franklin</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        
        <div className="testimonial py-4 px-3">
            <p>"I've traveled with many bus companies before, but none compare to the luxury offered by Dream Travels. Impeccable service, spacious seating, and modern amenities made my journey truly enjoyable."</p>


            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h5 className="mb-0 mt-3">Jatin Sinha</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        
        <div className="testimonial py-4 px-3">
            <p>"From start to finish, my experience with Dream Travels was top-notch. Easy booking process, punctual departure, and the luxury onboard amenities exceeded my expectations. Will definitely be booking again!"</p>


            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava04} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h5 className="mb-0 mt-3">James Franklin</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>


        <div className="testimonial py-4 px-3">
            <p>"Five-star luxury on wheels! Traveling with Dream Travel was a game-changer. I felt like a VIP with the comfortable seating, complimentary snacks, and attentive staff. Thank you for raising the bar in bus travel!"</p>


            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava05} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h5 className="mb-0 mt-3">Rita Sharma</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
};

export default Testimonials;