// import Slider from "react-slick";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import "./styles.css";

const HomeSlider = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <img
            src={require("../../assets/home/Coconut.png")}
            alt=""
            style={{ height: "60vh" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../assets/home/homeslider.png")}
            alt=""
            style={{ height: "60vh" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../assets/home/showprod4.png")}
            alt=""
            // style={{ height: "60vh" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../assets/home/showprod3.png")}
            alt=""
            // style={{ height: "60vh" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../assets/home/headerprod1.svg").default}
            alt=""
            style={{ height: "60vh" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../../assets/home/headerprod3.svg").default}
            alt=""
            style={{ width: "250px" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;

// const HomeSlider = () => {
//     const settings = {
//         infinite: true,
//         centerPadding: "60px",
//         slidesToShow: 2,
//         speed: 500,
//         arrows:false
//     };
//     return (
//         <>
//             <Slider {...settings}>
//                 <div>
//                     <img src={require("../../assets/home/homeslider.png")} alt="" />
//                 </div>
//                 <div>
//                     <img src={require("../../assets/home/homeslider.png")} alt="" />
//                 </div>
//                 <div>
//                     <img src={require("../../assets/home/homeslider.png")} alt="" />
//                 </div>
//             </Slider>
//         </>
//     )
// }

// export default HomeSlider
