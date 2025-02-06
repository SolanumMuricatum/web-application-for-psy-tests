import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../elements/Button';
import './styles/mainPage.css';

export function MainPage({}) {
  const topics = [
    {
      id: 1,
      name: "Делегирование полномочий и принятие решений",
      image: "./photo/chill_guy.jpg",
    },
    {
      id: 2,
      name: "Отбор персонала",
      image: "./photo/chill_guy.jpg",
    },
    {
      id: 3,
      name: "Адаптация сотрудников",
      image: "./photo/chill_guy.jpg",
    },
    {
      id: 4,
      name: "Мотивация персонала",
      image: "./photo/chill_guy.jpg",
    },
    {
      id: 5,
      name: "Системы компенсации и стимулирования персонала",
      image: "./photo/chill_guy.jpg",
    },
    {
      id: 6,
      name: "Управление проблемными сотрудниками",
      image: "./photo/chill_guy.jpg",
    },
    {
      id: 7,
      name: "Создание эффективной команды",
      image: "./photo/chill_guy.jpg",
    },
    {
      id: 8,
      name: "Развитие персонала",
      image: "./photo/chill_guy.jpg",
    },
  ];

  return (
    <>
      <div style={{ padding: '50px' }}>
        <div className='wrapper'>

          {topics.map((topic, index) => (

            <div key={index} className='card-wrapper'>
              <div className='name-wrapper'>
                <h2>{topic.name}</h2>
              </div>
              <div style={{marginTop: '20px'}}>
                <img src={topic.image}/>
              </div>
              <div style={{ padding: '20px' }}>
              <Link to={`/topic/${topic.id}`}>
                <Button text='Перейти к тестам' backgroundColor="#4CAF50" hoverColor="#45a049" />
              </Link>
              </div>
            </div>

          ))}
        </div>
      </div>
    </>
  );
}