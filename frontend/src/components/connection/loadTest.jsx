import { useEffect } from 'react';

export const LoadTest = ({ setTest, idTopic, idTest }) => {
  useEffect(() => {
    const fetchTest = async () => {
      try {
        const module = await import(`../tests/tests`); // Загружаем JSON
        const testsData = module.default.testsfile; // Достаём список тем

        if (testsData.length > 0 && testsData[0].tests.length > 0) {
          const test = testsData[idTopic - 1].tests[idTest - 1];
          setTest(test);
          console.log("Test:", test);
        } else {
          console.warn("Нет доступных тестов.");
        }
      } catch (error) {
        console.error('Ошибка при получении тестов:', error);
      }
    };

    fetchTest();
  }, [idTopic, idTest, setTest]);

  return null;
};