import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '../elements/Button';
import { LoadTest } from '../connection/loadTest';
import { LoadAmountOfQuestions } from '../connection/loadAmountOfQuestions';
import './styles/testPage.css'

//!! нужно ли сделать так, что кнопки браузера будут откатывать к предыдущему вопросу??

export function TestPage() {
  const [test, setTest] = useState({});
  const { idTopic, idTest } = useParams();

  const [endQuiz, setEndQuiz] = useState(false);
  const [amount, setAmount] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Инициализируем как null
  const [result, setResult] = useState(0);
  const [visibleResultDiv, setVisibleResultDiv] = useState(null);
  const [blockRadio, setBlockRadio] = useState(false);
  const [transformation, setTransformation] = useState('scaleX(0)');
  const [advice, setAdvice] = useState(null);

  console.log("questions: " + amount);

  useEffect(()=>{
    if(endQuiz){
      setSelectedAnswer(null);
      setBlockRadio(true);
      setResult(Math.round(result * 100 / amount * 100) / 100);
  
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
  }, [setResult, endQuiz]);


  const handleNext = () => {
    
    if (currentIndex < test.questions.length - 1) {
      setCurrentIndex(prevIndex => {
        if(selectedAnswer == 1){
          setResult(result+1)
          console.log(result);
        }
        else if(selectedAnswer == 0.5){
          setResult(result+0.5);
        }
        setSelectedAnswer(null);
        setTransformation('scaleX(' + (currentIndex+1)/ + amount + ')');
        return prevIndex + 1;
      });
    }
    else if(currentIndex == test.questions.length - 1){
      if(selectedAnswer == 1){
        setResult(result+1)
        console.log(result);
      }
      else if(selectedAnswer == 0.5){
        setResult(result+0.5);
      }
      setSelectedAnswer(null);

      setEndQuiz(true);
    }
  };

  return (
    <>
      <LoadTest setTest={setTest} idTopic={idTopic} idTest={idTest}/>
      <LoadAmountOfQuestions topicId={idTopic} testId={idTest} setAmountOfQuestions={setAmount} visibility={"none"}/>
     
      
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
                  {test.questions[currentIndex].answers.map((option, index) => (
                    <div className='wrapper-answer'>
                      <label className='answer-label' key = {currentIndex + "-" + index}>
                        <input className='input-answer-wrapper' key = {currentIndex + "-" + index}
                          type="radio" 
                          name="question" 
                          value={option.isCorrect} 
                          onChange={() => {setSelectedAnswer(option.is_right)}} 
                          disabled = {blockRadio}
                      />
                        {option.answer}
                      </label>
                    </div>
                  ))}
                  <button className='answer-button' onClick={handleNext} disabled={selectedAnswer==null||undefined}>
                    {currentIndex === test.questions.length - 1 ? 'Перейти к результатам' : 'Следующий вопрос'}
                  </button>
                </div> 
          </div>
        )}
        {visibleResultDiv!=null &&(
          <div>
            <div className='result-container'>
              <div>Ваш результат - {result}%</div>
              <div className='result-message'>{advice}</div>
            </div>
            <div style={{marginTop: '50px'}}>
              <Link to={`/topic/${idTopic}`}>
                <Button text='Вернуться на страницу с тестами' backgroundColor="#4CAF50" hoverColor="#45a049"></Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}