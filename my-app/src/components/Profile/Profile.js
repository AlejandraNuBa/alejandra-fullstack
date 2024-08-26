import React, { useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  useEffect(() => {
    const starsContainer = document.querySelector('.stars-container');
    const numStars = 100; // número de estrellas

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');

      // Establecer posiciones y animaciones aleatorias
      const left = Math.random() * 100 + '%';
      const top = Math.random() * 100 + '%';
      const duration = Math.random() * 5 + 4 + 's'; // Duración entre 4s y 9s

      star.style.left = left;
      star.style.top = top;
      star.style.animationDuration = duration;

      starsContainer.appendChild(star);
    }
  }, []);

  return (
    <div className="banner">
      <div className="profile-picture">
      <img src="/images/profile-section/profile.jpeg" alt="Profile" />
      </div>
      <div className="profile-text">
        <h1 id="name">Alejandra Nuñez Bautista</h1>
        <h2 id="subtitle">Full Stack Developer</h2>
      </div>
      <div className="stars-container"></div> {/* Contenedor para las estrellas */}
    </div>
  );
}

export default Profile;
