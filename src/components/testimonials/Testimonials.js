import React from "react";
import "./testimonial.css";
import Hero from "../../assets/testimonialHero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className="Twrapper">
        <div className="Tcontainer">
          <span>Top Rated</span>
          <span>
            Seedily say has suitable disposal and boy. Excercise joy man
            children rejoiced
          </span>
        </div>
        <img src={Hero} alt="HeroImage" />
        <div className="Tcontainer">
          <span>100k</span>
          <span>Happy customers with us</span>
        </div>
      </div>
      <div className="reviews">Reviews</div>
      <div className="carousal">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className="tCarousal"
        >
          {TestimonialsData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="items">
                <img src={item.image} alt="testimonialImages" />
                <span>{item.comment}</span>
                <hr />
                <span>{item.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
