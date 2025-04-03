import { useEffect } from 'react';

export const LoadResult = ({ setScore, idTopic, idTest }) => {
  useEffect(() => {
    const fetchResult = async () => {
      try {
        const module = await import(`../tests/tests`); // Загружаем JSON
        const testsData = module.default.testsfile; // Достаём список тем

        if (testsData.length > 0 && testsData[0].tests.length > 0) {
          const test = testsData[idTopic - 1].tests[idTest - 1].results;
          setScore(test);
          console.log("Results:", test);
        } else {
          console.warn("Нет доступных тестов.");
        }
      } catch (error) {
        console.error('Ошибка при получении результатов теста:', error);
      }
    };

    fetchResult();
  }, [idTopic, idTest, setScore]);

  return null;
};