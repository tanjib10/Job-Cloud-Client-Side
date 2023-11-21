import slider2 from "../assets/group-people-working-out-business-plan-office (2).jpg";
import slider3 from "../assets/bussiness-people-working-team-office.jpg";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/bundle";
import slider1 from "../assets/close-up-briefcase.jpg";
const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        fadeEffect={{ clickable: true }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <Swiper>
          <SwiperSlide>
            <div className="h-[95vh] w-full">
              <img className="h-full w-full" src={slider1} alt="" />
              <div className="backdrop-blur-sm left-0 right-0 bottom-0 flex flex-col justify-center items-center"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[95vh] w-full">
              <img className="h-full w-full" src={slider2} alt="" />
              <div className="backdrop-blur-sm left-0 right-0 bottom-0 flex flex-col justify-center items-center"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-[95vh] w-full">
              <img className="h-full w-full" src={slider3} alt="" />
              <div className="backdrop-blur-sm left-0 right-0 bottom-0 flex flex-col justify-center items-center"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Swiper>
    </div>
  );
};

export default Banner;
