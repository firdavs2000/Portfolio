import React, { useContext } from 'react';
import homeLogo from "../assets/images/home.png";
import { DarkModeContext } from '../context/DarkModeContext';

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section id="home" className={`home ${darkMode ? 'dark' : 'light'}`}>
      <div className="container home_content">
        {/* Text on the left */}
        <div className="home_textbox">
          <h2 className="home_title">Frontend Developer</h2>
          <p className="home_text">
            Я фронтенд-разработчик, создающий современные, адаптивные и удобные интерфейсы для веб-приложений.
            Работаю с HTML, CSS, JavaScript и популярными фреймворками, такими как React и Vue.
            Сочетаю внимание к деталям с заботой о пользовательском опыте, чтобы сайты были не только красивыми, но и функциональными.
          </p>

          <div className="home_info">
            <a
              href="/Komilov-Firdavs-CV.pdf"
              className="btn home_btn"
              download
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Image on the right */}
        <div className="home_image">
          <img src={homeLogo} alt="Home" />
        </div>
      </div>
    </section>
  );
};

export default Home;
