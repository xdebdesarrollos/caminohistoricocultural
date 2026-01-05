import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../css/cards.css'; // Nuevo archivo CSS

const Cards = () => {
  const [flipped, setFlipped] = useState([false, false, false, false]);

  const cardsData = [
    {
      title: 'Historia',
      backText: 'Explora el pasado de Jardín América y sumergite en una historia rica y vibrante que se remonta a principios del siglo XX.',
      icon: 'historia.png',
    },
    {
      title: 'Arte y Cultura',
      backText: 'Descubre la riqueza cultural y artística de Jardín América, donde las tradiciones inmigrantes se fusionan con danzas, música y artesanías que reflejan la vibrante identidad de Misiones.',
      icon: 'arte.png',
    },
    {
      title: 'Naturaleza',
      backText: 'Aprende sobre la biodiversidad local de Jardín América, con su tierra colorada, selva subtropical, arroyos cristalinos y una fauna única que define el corazón verde de Misiones.',
      icon: 'biodiversidad.png',
    },
    {
      title: 'Comunidad',
      backText: 'Conectate con las tradiciones locales de Jardín América, donde la unión de sus habitantes brilla en festividades, trabajos cooperativos y el legado vivo de sus raíces inmigrantes.',
      icon: 'comunidad.png',
    },
  ];

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <div className="cards-grid">
      {cardsData.map((card, index) => (
        <motion.div
          key={index}
          className="card-wrapper"
          onClick={() => handleFlip(index)}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`card-flip ${flipped[index] ? 'flipped' : ''}`}>
            {/* Frente de la card */}
            <div className="card-face card-front">
              <div className="icon-container">
                <img
                  src={`./images/icons/${card.icon}`}
                  alt={`${card.title} icon`}
                  className="card-icon"
                />
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="flip-hint">Toca para ver más →</p>
            </div>

            {/* Reverso de la card */}
            <div className="card-face card-back">
              <h3 className="card-title-back">{card.title}</h3>
              <p className="card-text">{card.backText}</p>
              <p className="flip-hint-back">← Toca para volver</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;