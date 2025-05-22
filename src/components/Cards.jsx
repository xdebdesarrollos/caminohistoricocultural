import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../css/cards.css';

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
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <motion.div
          key={index}
          className="card"
          onClick={() => handleFlip(index)}
          animate={{ rotateY: flipped[index] ? 360: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="card-inner">
            <motion.div
              className="card-front"
              initial={{ rotateY: -180}}
              animate={{ rotateY: flipped[index] ? 0 : 360 }}
              transition={{ duration: 0.6 }}
            >
              <img src={`images/icons/${card.icon}`} alt={`${card.title} icon`} className="card-icon" />
              <h3>{card.title}</h3>
            </motion.div>
            <motion.div
              className="card-back"
              initial={{ rotateY: 180 }}
              animate={{ rotateY: flipped[index] ? 0 : 180 }}
              transition={{ duration: 0.6 }}
            >
              <p>{card.backText}</p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;