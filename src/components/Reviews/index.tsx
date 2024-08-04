import styles from "./styles.module.css";
import paw from "../../assets/images/paw.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { users } from "./data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

export function Reviews() {
  const profilePics: JSX.Element[] = [];

  for (let i = 0; i < 5; i++) {
    profilePics.push(<FontAwesomeIcon key={i} icon={faStar} />);
  }

  return (
    <section id="reviews" className={styles.reviews}>
      <div className="heading">
        <img src={paw} />
        <h1 className="title">depoimentos</h1>
      </div>
      <div className={styles.reviews_slider}>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
          loop={true}
          grabCursor={true}
          className="mySwiper"
        >
          {users.map((user, idx) => (
            <SwiperSlide key={idx}>
              <div className={styles.slide}>
                <p>{user.review}</p>
                <div className={styles.user}>
                  <img src={user.profile} alt="" />
                  <div className={styles.info}>
                    <h3>{user.title}</h3>
                    <div className={styles.stars}>
                      <div className={styles.star}>{profilePics}</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
