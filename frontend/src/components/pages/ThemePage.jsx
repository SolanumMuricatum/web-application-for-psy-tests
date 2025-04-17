import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../elements/Button';
import './styles/themePage.css';
import { LoadTopic } from '../connection/loadTopic';

export function ThemePage({}) {
  const[topics, setTopics] = useState([]);

  return (
    <>
      <LoadTopic setTopic={setTopics}/>
      <div>
        <div className='wrapper'>

          {topics.map((topic, index) => ( 
            // изменения начинать отсюда
            
            <Link key={index + 1} className='card-wrapper' to={`/topic/${index + 1}`} style={{backgroundImage: `url("${process.env.PUBLIC_URL}/images/theme_${index+1}.png")`}}>
              <img className='img-wrapper' src={`${process.env.PUBLIC_URL}/images/for_theme_image.svg`}></img>
              <h4><b>Тема: </b>{topic}</h4>
              <div className='lil-test-wrapper'>Тесты: ▢ ▢ ▢</div>
            </Link>

            // дальше не трогать
          ))} 
        </div>
      </div>
    </>
  );
}