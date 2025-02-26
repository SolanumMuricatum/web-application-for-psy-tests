import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../elements/Button';
import './styles/mainPage.css';

export function MainPage({}) {
  const topics = [
    {
      id: 1,
      name: "Делегирование полномочий и принятие решений",
      image: "./photo/m.jpg"
    },
    {
      id: 2,
      name: "Отбор персонала",
      image: "./photo/m.jpg"
    },
    {
      id: 3,
      name: "Адаптация сотрудников",
      image: "./photo/m.jpg"
    },
    {
      id: 4,
      name: "Мотивация персонала",
      image: "./photo/m.jpg"
    },
    {
      id: 5,
      name: "Системы компенсации и стимулирования персонала",
      image: "./photo/m.jpg"
    },
    {
      id: 6,
      name: "Управление проблемными сотрудниками",
      image: "./photo/m.jpg"
    },
    {
      id: 7,
      name: "Создание эффективной команды",
      image: "./photo/m.jpg"
    },
    {
      id: 8,
      name: "Развитие персонала",
      image: "./photo/m.jpg"
    },
  ];

  return (
    <>
      <div style={{ padding: '50px' }}>
        <div className='wrapper'>

          {topics.map((topic, index) => ( 
            // изменения начинать отсюда

            <div key={index} className='card-wrapper'>
              <div></div>
              <div className='image-wrapper' style={{backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, rgb(0, 0, 0) 100%), url(${topic.image})`}}>
                <p className='name-wrapper'>{topic.name}</p>
              </div>
              <div style={{backgroundColor: "#FFFFFF", borderRadius: "5px", alignContent: 'center'}}> 
                <Link to={`/topic/${topic.id}`}>
                  <Button text='Перейти к тестам' backgroundColor="#3f3b49" hoverColor="#5D576B" textSize="18pt" />
                </Link>
              </div>
            </div>
            
            // дальше не трогать
          ))} 
        </div>
      </div>
    </>
  );
}