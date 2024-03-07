import styles from "./styles.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import { sliders } from "./data";

export function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.home_slider}>
        <Swiper
          navigation={true}
          loop={true}
          grabCursor={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {sliders.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <section
                className={styles.slide}
                style={{
                  background: `url(${slide.bgImg}) no-repeat`,
                }}
              >
                <div className={styles.content}>
                  <h3 className={styles.heading}>{slide.title}</h3>
                  <p>{slide.text}</p>
                  <a href="#about" className={styles.btn}>
                    vamos começar
                  </a>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
