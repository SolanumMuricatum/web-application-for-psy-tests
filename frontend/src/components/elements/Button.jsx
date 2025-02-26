import React, { useState, useEffect } from 'react';

export function Button({ text, backgroundColor, hoverColor, fontSize }) {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: hovered ? backgroundColor :  hoverColor, // Меняет цвет при наведении
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: fontSize,
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