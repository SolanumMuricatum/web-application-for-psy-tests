import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../elements/Button';
import { useParams } from 'react-router-dom';
import { LoadTest } from '../connection/loadTest';
import './styles/topicPage.css';
import { LoadTopic } from '../connection/loadTopic';
import { LoadTestName } from '../connection/loadTestName';


export function TopicPage() {
  const [topic, setTopic] = useState([]);
  const [names, setNames] = useState([]);
  const [test1, setTest1] = useState();
  const [test2, setTest2] = useState();
  const [test3, setTest3] = useState();

  const numbers = [1, 2, 3];

  const {id} = useParams();

  return (
    <>
      <LoadTopic setTopic={setTopic} />
      <LoadTestName setName={setNames} />
      <LoadTest setTest={setTest1} testName={'test_1.js'} id={id}/>
      <LoadTest setTest={setTest2} testName={'test_2.js'} id={id}/>
      <LoadTest setTest={setTest3} testName={'test_3.js'} id={id}/>

      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className="theme-preview">
          <div className="gradient-theme-background" style={{ backgroundImage: `url('/images/theme_${id}.png')` }}></div>
          <div className="grey-theme-background"></div>
          <h4 className="theme-name"><b>Тема: </b>{topic[Number(id)-1]}</h4>
        </div>
      </div>

      <div style={{ padding: '50px' }}>
        <div className='wrapper-topic'>

          {test1 && ( // Проверяем, что test1 не null

          <Link to={`/topic/${id}/${numbers[0]}`} className='card-wrapper-topic'>
            <img src={`/images/test_${id}_1.png`}></img>
            <h2><b>Тест:</b> {test1.name}</h2>
            {/* ----- ПОЧИНИТЬ: ----- innerHTML: ${testsfile[theme_num].tests[index].questions.length} вопросов */}
            <div className='over-information'>
              <div className='num-of-questions'>{test1.questions?.length || 0} вопросов</div>
              <div className='time-for-doing'>3 мин</div>
              <div className='data-of-test'>28.02.2025</div>
            </div>
          </Link>

          )}

          {test2 && ( // Проверяем, что test1 не null

            <Link to={`/topic/${id}/${numbers[1]}`} className='card-wrapper-topic'>
            <img src={`/images/test_${id}_2.png`}></img>
            <h2><b>Тест:</b> {test1.name}</h2>
            {/* ----- ПОЧИНИТЬ: ----- innerHTML: ${testsfile[theme_num].tests[index].questions.length} вопросов */}
            <div className='over-information'>
              <div className='num-of-questions'>{test2.questions?.length || 0} вопросов</div>
              <div className='time-for-doing'>3 мин</div>
              <div className='data-of-test'>28.02.2025</div>
            </div>
            </Link>

            )}

          {test3 && ( // Проверяем, что test1 не null

            <Link to={`/topic/${id}/${numbers[2]}`} className='card-wrapper-topic'>
            <img src={`/images/test_${id}_3.png`}></img>
            <h2><b>Тест:</b> {test1.name}</h2>
            {/* ----- ПОЧИНИТЬ: ----- innerHTML: ${testsfile[theme_num].tests[index].questions.length} вопросов */}
            <div className='over-information'>
              <div className='num-of-questions'>{test3.questions?.length || 0} вопросов</div>
              <div className='time-for-doing'>3 мин</div>
              <div className='data-of-test'>28.02.2025</div>
            </div>
            </Link>

            )}
            
        </div>
      </div>
    </>
  );
}