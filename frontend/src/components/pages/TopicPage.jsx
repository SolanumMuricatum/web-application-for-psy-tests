import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../elements/Button';
import { useParams } from 'react-router-dom';
import { LoadTest } from '../connection/loadTest';


export function TopicPage() {
  const [test1, setTest1] = useState();
  const [test2, setTest2] = useState();
  const [test3, setTest3] = useState();

  const {id} = useParams();

  return (
    <>
      <LoadTest setTest={setTest1} testName={'test_1.js'} id={id}/>
      <LoadTest setTest={setTest2} testName={'test_2.js'} id={id}/>
      <LoadTest setTest={setTest3} testName={'test_3.js'} id={id}/>
      <div style={{ padding: '50px' }}>
        <div className='wrapper'>
          {test1 && ( // Проверяем, что test1 не null

            <div className='card-wrapper'>
              <div className='name-wrapper'>
                <h2>{test1.name}</h2>
              </div>
              <div style={{ padding: '20px' }}>
                <Link to={`/topic/${id}/1`}>
                  <Button text='Начать' backgroundColor="#4CAF50" hoverColor="#45a049" />
                </Link>
              </div>
            </div>

          )}
          {test2 && ( // Проверяем, что test1 не null

            <div className='card-wrapper'>
              <div className='name-wrapper'>
                <h2>{test2.name}</h2>
              </div>
              <div style={{ padding: '20px' }}>
                <Link to={`/topic/${id}/2`}>
                  <Button text='Начать' backgroundColor="#4CAF50" hoverColor="#45a049" />
                </Link>
              </div>
            </div>

            )}
          {test3 && ( // Проверяем, что test1 не null

            <div className='card-wrapper'>
              <div className='name-wrapper'>
                <h2>{test3.name}</h2>
              </div>
              <div style={{ padding: '20px' }}>
                <Link to={`/topic/${id}/3`}>
                  <Button text='Начать' backgroundColor="#4CAF50" hoverColor="#45a049" />
                </Link>
              </div>
            </div>

            )}
        </div>
      </div>
    </>
  );
}