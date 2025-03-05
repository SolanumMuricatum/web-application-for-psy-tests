import React, { useEffect, useState } from 'react';
import { LoadTest } from '../../../connection/loadTest';
import { useNavigate } from 'react-router-dom';
import { margin } from '@mui/system';
import '../../styles/testPage.css'

//!! нужно ли сделать так, что кнопки браузера будут откатывать к предыдущему вопросу??

export function ThirdTestPageOne() {
const [test, setTest] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Инициализируем как null
  const [result, setResult] = useState(0);
  const [visibleResultDiv, setVisibleResultDiv] = useState(null);
  const [blockRadio, setBlockRadio] = useState(false);
  const [transformation, setTransformation] = useState('scaleX(0)');
  const [currentQuestion, setCurrentQuestion] = useState('1/29');
  const navigate = useNavigate();
  const [advice, setAdvice] = useState(null);

  const handleNext = () => {
    if (currentIndex < test.questions.length - 1) {
      setCurrentIndex(prevIndex => {
        if(selectedAnswer === "yes"){
          setResult(result+1)
        }
        setSelectedAnswer(null);
        setTransformation('scaleX(' + (currentIndex+1)/29 + ')');
        setCurrentQuestion((currentIndex + 2) + '/29');
        return prevIndex + 1;
      });
    } else {
      setSelectedAnswer(null);
      setBlockRadio(true);
      setResult(result*10);

      if(result <= 20){
        setAdvice("Ну ты постарался, но мог бы пройти тест и получше:(")
      }
      else if(result <= 50 && result >= 20){
        setAdvice("Ты вроде что-то знаешь, а вроде и нет")
      }
      else if(result <= 70 && result >= 50){
        setAdvice("Неплохо-неплохо, но не отлично")
      }
      else if(result <= 90 && result >= 80){
        setAdvice("Молодец, почти идеально!")
      }
      else if(result === 100){
        setAdvice("Отлично! Ты полностью справился с тестом! Так держать!")
      }
      setVisibleResultDiv(1);
    }
  };

  return (
    <>
      <LoadTest setTest={setTest} testName={'test_3.js'} id={1}/>
      
      <div style={{ margin: '0 auto', display: 'grid', placeItems: 'center', height: 'calc(100vh - 64px)' }}>
        {test.questions && visibleResultDiv === null &&(
          <div className='wrapper-test'>
                <div className='wrapper-answers-block'>
                  <div className='progress-wrapper'>
                    <div className='progress-wrapper-name'>Прогресс:</div>
                    <div className='progress-container'>
                      <div className='underline-1-3' style={{transform: transformation}}></div>
                    </div>
                  </div>
                  <p className='name-wrapper'>{test.questions[currentIndex].question}</p>
                  {test.questions[currentIndex].options.map((option, index) => (
                    <div className='wrapper-answer'>
                      <label className='answer-label' key = {currentIndex + "-" + index}>
                        <input className='input-answer-wrapper' key = {currentIndex + "-" + index}
                          type="radio" 
                          name="question" 
                          value={option.isCorrect} 
                          onChange={() => {setSelectedAnswer(option.isCorrect)}} 
                          disabled = {blockRadio}
                      />
                        {option.text}
                      </label>
                    </div>
                  ))}
                  <button className='answer-button' onClick={handleNext} disabled={!selectedAnswer}>
                    {currentIndex === test.questions.length - 1 ? 'Перейти к результатам' : 'Следующий вопрос'}
                  </button>
                </div> 
          </div>
        )}
        {visibleResultDiv!=null &&(
          <div className='result-container'>
            <div>Ваш результат - {result}%</div>
            <div className='result-message'>{advice}</div>
          </div>
        )}
      </div>
    </>
  );
}