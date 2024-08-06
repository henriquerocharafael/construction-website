import styles from "./styles.module.css";

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
        <svg style={{width: "4.5rem", height: "4.5rem"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.523 26.991">
          <path id="df31d20099997c14505104132c3b1396" d="M8.276,85.732a11.166,11.166,0,0,1,5.838-3.537,8.634,8.634,0,0,1,7.52,1.992,15.172,15.172,0,0,1,3.5,4.464,11.559,11.559,0,0,1,1.374,4.876,4.106,4.106,0,0,1-1.374,3.537c-1.889,1.442-4.842.858-7.211.412-.309-.069-.652-.137-.721-.137a11.011,11.011,0,0,0-4.4.24,18.109,18.109,0,0,1-3.468.412c-1.854-.034-3.056-.652-3.709-1.717a5.99,5.99,0,0,1-.481-4.155A12.869,12.869,0,0,1,8.276,85.732ZM3.056,78.8a4.48,4.48,0,0,1,4.121,2.988,4.721,4.721,0,0,1,.343,1.648,4.09,4.09,0,0,1-.24,1.614A2.855,2.855,0,0,1,4.4,86.933,3.954,3.954,0,0,1,1.82,85.9,5.3,5.3,0,0,1,.206,83.4,5.05,5.05,0,0,1,0,81.954,3.89,3.89,0,0,1,.549,80.1a2.74,2.74,0,0,1,1.545-1.2A2.957,2.957,0,0,1,3.056,78.8ZM9.993,71a4.24,4.24,0,0,1,3.159,1.408A6.518,6.518,0,0,1,14.8,76.014a4.662,4.662,0,0,1,.1,1,5.729,5.729,0,0,1-.721,2.816,3.188,3.188,0,0,1-2.4,1.786,3.143,3.143,0,0,1-.584.034c-2.2,0-3.674-1.683-4.361-3.709a9.217,9.217,0,0,1-.378-2.163h0a6.658,6.658,0,0,1,.24-2.06A3.389,3.389,0,0,1,9.993,71ZM24.347,81.783A4.433,4.433,0,0,1,28.433,78.8a3.065,3.065,0,0,1,1,.1,2.74,2.74,0,0,1,1.545,1.2,3.89,3.89,0,0,1,.549,1.854,5.05,5.05,0,0,1-.206,1.442A5.3,5.3,0,0,1,29.7,85.9a4.025,4.025,0,0,1-2.575,1.03,2.827,2.827,0,0,1-2.884-1.889A3.553,3.553,0,0,1,24,83.431,4.058,4.058,0,0,1,24.347,81.783Zm-6.009-9.375A4.371,4.371,0,0,1,21.531,71a3.448,3.448,0,0,1,3.3,2.713,7.887,7.887,0,0,1,.24,2.06h0a7.781,7.781,0,0,1-.412,2.163c-.652,2.026-2.163,3.709-4.361,3.709a2.776,2.776,0,0,1-.549-.034,3.306,3.306,0,0,1-2.438-1.786,5.7,5.7,0,0,1-.687-2.816,9.072,9.072,0,0,1,.069-1A7.026,7.026,0,0,1,18.337,72.408Z" transform="translate(0 -71)" fill="#fff" fill-rule="evenodd" />
        </svg>
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
