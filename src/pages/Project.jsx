import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { DarkModeContext } from '../context/DarkModeContext';

import aboutImg from '../assets/images/about.jpg';
import houseImg from '../assets/images/house.jpg';
import newsImg from '../assets/images/news.JPG';
import lazzatImg from '../assets/images/lazzat.jpg';
import marketImg from '../assets/images/market.jpg';
import vueImg from '../assets/images/vue.jpg';
import totemboImg from '../assets/images/totembo.jpg';
import shopImg from '../assets/images/shop.jpg';

const projects = [
  { name: '(HTML,CSS)', img: aboutImg },
  { name: '(HTML,CSS)', img: houseImg },
  { name: '(HTML,CSS)', img: newsImg },
  { name: '(HTML,CSS,JS)', img: lazzatImg },
  { name: '(HTML,SASS,REACT,TS)', img: marketImg },
  { name: '(HTML,REACT,JS,SASS)', img: vueImg },
  { name: '(HTML,REACT,JS,TS,SASS)', img: totemboImg },
  { name: '(HTML,REACT,TS,SASS)', img: shopImg },
];

const Project = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className={`project ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h2 className="title">Projects</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="project_box"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project_card">
                <img src={project.img} alt={`${project.name} preview`} className="project_icon" />
                <h3 className="project_text">{project.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
