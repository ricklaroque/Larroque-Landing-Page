import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function Carousel({ slides }) {
  return (
    <section className="rounded-[8px] border border-amber-200 bg-white p-6 shadow-[0_18px_40px_rgba(35,24,16,0.06)]">
      <div className="mx-auto max-w-[60%]">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
        //   centeredSlides={false}
          loop={true}
          allowTouchMove={false} // importante pra não travar
          autoplay={{ delay: 1, disableOnInteraction: false }}
          speed={5000}
          className="h-[280px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-[220px] overflow-hidden rounded-[8px] bg-amber-50 p-2">
                <img src={slide} alt={`slide-${index}`} className="h-full w-full object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
