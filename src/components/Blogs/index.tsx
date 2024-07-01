import styles from "./styles.module.css";

import { blogs } from "./data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export function Blogs() {
  return (
    <section id="blogs" className={styles.blogs}>
      <h1 className="heading">our blogs</h1>
      <div className={styles.blogs_slider}>
        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
          }}
        >
          {blogs.map((blog, idx) => (
            <SwiperSlide key={idx}>
              <div className={styles.slide}>
                <div className={styles.image}>
                  <img src={blog.img} alt="" />
                </div>
                <div className={styles.content}>
                  <h3>{blog.title}</h3>
                  <p>{blog.content}</p>
                  <a href="#" className={styles.btn}>
                    read more
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
