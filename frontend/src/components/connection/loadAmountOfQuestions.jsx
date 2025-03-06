import { useEffect, useState } from 'react';

export const LoadAmountOfQuestions = ({ themeId, testId }) => {

    const[amount, setAmount] = useState();
    useEffect(() => {
    

    const fetchTest = async () => {
      try {
        const module = await import(`../tests/tests`); // Загружаем JSON
        const testsData = module.default.testsfile; // Достаём список тем

        if (testsData.length > 0 && testsData[0].tests.length > 0) {
          const amount = testsData[themeId - 1].tests[testId].questions.length;
          setAmount(amount);
          console.log("Число тестов:", amount);
        
        } else {
          console.warn("Нет доступных тестов.");
       
        }
      } catch (error) {
        console.error('Ошибка при получении тестов:', error);

      }
    };

    fetchTest();
  }, [themeId, testId]); 

  return (
    <>
      <div className='num-of-questions'>{amount} вопросов</div>
    </>
  );
};
