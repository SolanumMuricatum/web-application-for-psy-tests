import React, { useState, useEffect } from 'react';

export function Button({ text }) {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: hovered ? '#45a049' : '#4CAF50', // Меняет цвет при наведении
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setHovered(true)} // Устанавливает состояние при наведении
      onMouseLeave={() => setHovered(false)} // Сбрасывает состояние при уходе
    >
      {text}
    </button>
  );
}