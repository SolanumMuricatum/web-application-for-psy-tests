import React, { useEffect, useState } from 'react';
import { LoadTest } from '../../../connection/loadTest';
import { useNavigate } from 'react-router-dom';

export function FirstTestPage() {
  const [test, setTest] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Инициализируем как null
  const [isChecked, setIsChecked] = useState();
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentIndex < test.questions.length - 1) {
      setCurrentIndex(prevIndex => {
        setSelectedAnswer(null);
        return prevIndex + 1;
      });
    } else {
      navigate('/results');
    }
  };

  return (
    <>
      <LoadTest setTest={setTest} testName={'test_1.js'} />
      
      <div style={{ padding: '50px' }}>
        <div className='wrapper'>
          {test.questions && (
            <div>
              <h2>{test.questions[currentIndex].question}</h2>

              {test.questions[currentIndex].options.map((option, index) => (
                <label key = {currentIndex + "-" + index}>
                  <input key = {currentIndex + "-" + index}
                    type="radio" 
                    name="question" 
                    value={option.isCorrect} 
                    onChange={() => {setSelectedAnswer(option.isCorrect)}} 
                  />
                  {option.text}
               </label>
              ))}

              <button onClick={handleNext} disabled={!selectedAnswer}>
                {currentIndex === test.questions.length - 1 ? 'Перейти к результатам' : 'Следующий вопрос'}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}