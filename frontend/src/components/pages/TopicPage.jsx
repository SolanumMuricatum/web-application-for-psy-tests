import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../elements/Button';
import { useParams } from 'react-router-dom';
import { LoadTest } from '../connection/loadTest';


export function TopicPage() {
  const [test1, setTest1] = useState();

  const {id} = useParams();
  const test2 = [
    {
      id: 1,
      name: "Тестик 2 (пока нету)",
    },
  ];
  const test3 = [
    {
      id: 1,
      name: "Тестик 3 (пока нету)",
    },
  ];

  return (
    <>
      <LoadTest setTest={setTest1} testName={'test_1.js'} />
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
        </div>
      </div>
    </>
  );
}