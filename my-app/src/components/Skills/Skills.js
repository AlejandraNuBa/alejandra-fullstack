import React, { useEffect } from 'react';
import Slider from "react-slick";

// Importar los estilos de slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Skills.css';

function Skills() {
  useEffect(() => {
    const starsContainerSkills = document.querySelector('.stars-container-skills');
    const numStars = 50;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');

      const left = Math.random() * 100 + '%';
      const top = Math.random() * 100 + '%';
      const duration = Math.random() * 5 + 4 + 's';

      star.style.left = left;
      star.style.top = top;
      star.style.animationDuration = duration;

      starsContainerSkills.appendChild(star);
    }

    const logosContainer = document.querySelector('.logos-container');
    const logos = [
      'css-logo.png',
      'html-logo.png',
      'js-logo.png',
      'php-logo.png',
      'python-logo.png',
      'tys-logo.png',
    ];

    logos.forEach((logo, index) => {
      const img = document.createElement('img');
      img.src = `/images/skills-section/${logo}`;
      img.alt = `Logo ${index + 1}`;
      img.classList.add('floating-logo');

      const left = Math.random() * 100 + '%';
      const top = Math.random() * 100 + '%';
      const duration = Math.random() * 20 + 5 + 's';

      img.style.left = left;
      img.style.top = top;
      img.style.animationDuration = duration;

      logosContainer.appendChild(img);
    });

  }, []);

  const banners = [
    {
      title: "Lenguajes de Programación",
      items: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "Python", "PHP"]
    },
    {
      title: "Frameworks y Librerías",
      items: ["React", "Angular", "Vue", "Node.js", "Next.js", "Laravel", "Symfony", "CodeIgniter", "JQuery", "Redux", "Express", "D3.js", "Flask/Django"]
    },
    {
      title: "Herramientas de Pruebas Unitarias e Integración",
      items: ["PyTest", "JUnit", "Jest", "PHPUnit"]
    },
    {
      title: "APIs y Microservicios",
      items: ["GraphQL", "API REST"]
    },
    {
      title: "Bases de Datos",
      items: ["PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      title: "CRM y CMS",
      items: ["CRM (en general)", "CMS (en general)", "ZOHO", "Pipedrive", "Salesforce"]
    },
    {
      title: "Herramientas de Automatización de Pruebas",
      items: ["Appium", "Postman"]
    },
    {
      title: "Control de Versiones",
      items: ["GitHub", "Bitbucket"]
    },
    {
      title: "Metodologías Ágiles",
      items: ["Scrum", "Kanban"]
    }
  ];

  const settings = {
    dots: true, // Muestra los indicadores de paginación
    infinite: true, // Cicla de manera infinita
    speed: 500,
    slidesToShow: 3, // Muestra 3 banners en pantallas grandes
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Muestra 2 banners en tablets
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Muestra 1 banner en móviles
          slidesToScroll: 1,
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: "50%", width: "30px", height: "30px" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: "50%", width: "30px", height: "30px" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="bg">
      <div className="skills">
        <h1 id="title">Skills</h1>
      </div>
      <div className="stars-container-skills"></div>
      <div className="logos-container"></div> {/* Contenedor para los logos */}

      {/* Carrusel de banners */}
      <div className="carousel-container">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div className="banners-skills" key={index}>
              <h2>{banner.title}</h2>
              <ul>
                {banner.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Skills;
