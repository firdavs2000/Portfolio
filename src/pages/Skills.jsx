import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext'; // Qo‘shilishi kerak

import htmlLogo from '../assets/images/html.svg';
import cssLogo from '../assets/images/css.svg';
import jsLogo from '../assets/images/js.svg';
import githubLogo from '../assets/images/github.svg';
import figmaLogo from '../assets/images/figma.svg';
import sassLogo from '../assets/images/sass.svg';
import tsLogo from '../assets/images/typescript.svg';

const skills = [
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'JavaScript', logo: jsLogo },
  { name: 'GitHub', logo: githubLogo },
  { name: 'Figma', logo: figmaLogo },
  { name: 'Sass', logo: sassLogo },
  { name: 'TypeScript', logo: tsLogo }, // Ts -> TypeScript yaxshiroq ko‘rinadi
];

const Skills = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className={`skills ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h2 className="title">Skills</h2>
        <div className="skills_box">
          {skills.map((skill, index) => (
            <div className="skills_card" key={index}>
              <img src={skill.logo} alt={`${skill.name} Logo`} className="skills_icon" />
              <h3 className="skills_text">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
