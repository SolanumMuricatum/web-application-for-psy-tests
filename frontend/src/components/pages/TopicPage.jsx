import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../elements/Button';
import { useParams } from 'react-router-dom';
import { LoadTest } from '../connection/loadTest';
import './styles/topicPage.css';
import { LoadTopic } from '../connection/loadTopic';
import { LoadTestName } from '../connection/loadTestName';
import { LoadAmountOfQuestions } from '../connection/loadAmountOfQuestions';


export function TopicPage() {
  const [topic, setTopic] = useState([]);
  const [names, setNames] = useState([]);
  const [amount, setAmount] = useState(0);

  const numbers = [1, 2, 3];

  const { id } = useParams();

  console.log(names);
  console.log(amount);

  return (
    <>
      <LoadTopic setTopic={setTopic} />
      <LoadTestName setName={setNames} id={id} />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="theme-preview">
          <div
            className="gradient-theme-background"
            style={{ backgroundImage: `url('/images/theme_${id}.png')` }}
          ></div>
          <div className="grey-theme-background"></div>
          <h4 className="theme-name">
            <b>Тема: </b>{topic[Number(id) - 1]}
          </h4>
        </div>
      </div>

      <div style={{ padding: '50px' }}>
        <div className="wrapper-topic">
          {names[0] && (
            <>
              <Link to={`/test/${id}/${numbers[0]}`} className="card-wrapper-topic">
                <img src={`/images/test_${id}_1.png`} alt="Test 1" />
                <h2>
                  <b>Тест:</b> {names[0][0]}
                </h2>
                <div className="over-information">
                  <LoadAmountOfQuestions topicId={id} testId={1} setAmountOfQuestions={setAmount} visibility={"block"}/>
                  <div className="time-for-doing">3 мин</div>
                  <div className="data-of-test">28.02.2025</div>
                </div>
              </Link>

              <Link to={`/test/${id}/${numbers[1]}`} className="card-wrapper-topic">
                <img src={`/images/test_${id}_2.png`} alt="Test 2" />
                <h2>
                  <b>Тест:</b> {names[0][1]}
                </h2>
                <div className="over-information">
                  <LoadAmountOfQuestions topicId={id} testId={2} setAmountOfQuestions={setAmount} visibility={"block"}/>
                  <div className="time-for-doing">3 мин</div>
                  <div className="data-of-test">28.02.2025</div>
                </div>
              </Link>

              <Link to={`/test/${id}/${numbers[2]}`} className="card-wrapper-topic">
                <img src={`/images/test_${id}_3.png`} alt="Test 3" />
                <h2>
                  <b>Тест:</b> {names[0][2]}
                </h2>
                <div className="over-information">
                  <LoadAmountOfQuestions topicId={id} testId={3} setAmountOfQuestions={setAmount} visibility={"block"}/>
                  <div className="time-for-doing">3 мин</div>
                  <div className="data-of-test">28.02.2025</div>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
