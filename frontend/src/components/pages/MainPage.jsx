import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../elements/Button';
import './styles/mainPage.css';
import { Description } from '@mui/icons-material';

export function MainPage({}) {
  const topics = [
    {
      id: 1,
      name: "Делегирование полномочий и принятие решений",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "./photo/m.jpg"
    },
    {
      id: 2,
      name: "Отбор персонала",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at diam et lectus consectetur condimentum eget ut lorem. Proin feugiat sem enim, et aliquet mauris egestas quis. Sed lobortis laoreet ante, hendrerit sollicitudin enim feugiat at",
      image: "./photo/m.jpg"
    },
    {
      id: 3,
      name: "Адаптация сотрудников",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at diam et lectus consectetur condimentum eget ut lorem. Proin feugiat sem enim, et aliquet mauris egestas quis. Sed lobortis laoreet ante, hendrerit sollicitudin enim feugiat at",
      image: "./photo/m.jpg"
    },
    {
      id: 4,
      name: "Мотивация персонала",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at diam et lectus consectetur condimentum eget ut lorem. Proin feugiat sem enim, et aliquet mauris egestas quis. Sed lobortis laoreet ante, hendrerit sollicitudin enim feugiat at",
      image: "./photo/m.jpg"
    },
    {
      id: 5,
      name: "Системы компенсации и стимулирования персонала",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at diam et lectus consectetur condimentum eget ut lorem. Proin feugiat sem enim, et aliquet mauris egestas quis. Sed lobortis laoreet ante, hendrerit sollicitudin enim feugiat at",
      image: "./photo/m.jpg"
    },
    {
      id: 6,
      name: "Управление проблемными сотрудниками",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at diam et lectus consectetur condimentum eget ut lorem. Proin feugiat sem enim, et aliquet mauris egestas quis. Sed lobortis laoreet ante, hendrerit sollicitudin enim feugiat at",
      image: "./photo/m.jpg"
    },
    {
      id: 7,
      name: "Создание эффективной команды",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at diam et lectus consectetur condimentum eget ut lorem. Proin feugiat sem enim, et aliquet mauris egestas quis. Sed lobortis laoreet ante, hendrerit sollicitudin enim feugiat at",
      image: "./photo/m.jpg"
    },
    {
      id: 8,
      name: "Развитие персонала",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at diam et lectus consectetur condimentum eget ut lorem. Proin feugiat sem enim, et aliquet mauris egestas quis. Sed lobortis laoreet ante, hendrerit sollicitudin enim feugiat at",
      image: "./photo/m.jpg"
    },
  ];

  return (
    <>
      <div>
        <div className='wrapper'>

          {topics.map((topic, index) => ( 
            // изменения начинать отсюда

            <Link to={`/topic/${topic.id}`}>
              <div key={index} className='card-wrapper'>
                  <div className='image-wrapper' style={{backgroundImage: `url(${topic.image})`}}></div>
                  <a href={`/topic/${topic.id}`} className='name-wrapper'>{topic.name}</a>
                  <a href={`/topic/${topic.id}`} className='description-wrapper'>{topic.description}</a>
                  <div style={{backgroundColor: "#FFFFFF", borderRadius: "10px", alignContent: 'center'}}>   
                  </div>
              </div>
            </Link>

            // дальше не трогать
          ))} 
        </div>
      </div>
    </>
  );
}