import React, { useEffect, useState } from 'react';
import { LoadTest } from '../../../connection/loadTest';
import { useNavigate } from 'react-router-dom';
import { margin } from '@mui/system';

//!! нужно ли сделать так, что кнопки браузера будут откатывать к предыдущему вопросу??

export function SecondTestPageOne() {
  const [test, setTest] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Инициализируем как null
  const [result, setResult] = useState(0);
  const [visibleResultDiv, setVisibleResultDiv] = useState(null);
  const [blockRadio, setBlockRadio] = useState(false);
  const navigate = useNavigate();
  const [advice, setAdvice] = useState(null);

  const handleNext = () => {
    if (currentIndex < test.questions.length - 1) {
      setCurrentIndex(prevIndex => {
        if(selectedAnswer === "yes"){
          setResult(result+1)
        }
        setSelectedAnswer(null);
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
      <LoadTest setTest={setTest} testName={'test_2.js'} id={1}/>
      
      <div style={{ padding: '50px' }}>
        <div className='wrapper'>
          {test.questions && (
            <div>
              <h2>{test.questions[currentIndex].question}</h2>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {test.questions[currentIndex].options.map((option, index) => (
                  <label key = {currentIndex + "-" + index}>
                    <input key = {currentIndex + "-" + index}
                      type="radio" 
                      name="question" 
                      value={option.isCorrect} 
                      onChange={() => {setSelectedAnswer(option.isCorrect)}} 
                      disabled = {blockRadio}
                    />
                    {option.text}
                </label>
                ))}
              </div>
              <div style={{alignItems: 'center', marginTop: '50px'}}>
                <button onClick={handleNext} disabled={!selectedAnswer}>
                  {currentIndex === test.questions.length - 1 ? 'Перейти к результатам' : 'Следующий вопрос'}
                </button>
              </div>
            </div>
          )}
        </div>
        {visibleResultDiv!=null &&(
          <div>
            <div>Ваш результат - {result}%</div>
            <div style={{margin: '20px'}}>{advice}</div>
          </div>
        )}
      </div>
    </>
  );
}