import styles from "./styles.module.css";
import { logos } from "./data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export function ClientLogo() {
  return (
    <section className={styles.logo_container}>
      <div className={styles.logo_slider}>
        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={20}
          breakpoints={{
            450: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1000: { slidesPerView: 5 },
          }}
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <div className={styles.slide}>
                <img src={logo.img} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
