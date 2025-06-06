import { useEffect, useState } from 'react';

export const LoadTestName = ({ setName, id }) => {
  useEffect(() => {
    setName([]); // Очищаем старые данные

    const fetchTest = async () => {
      try {
        const module = await import(`../tests/tests`); // Загружаем JSON
        const testsData = module.default.testsfile; // Достаём список тем

        if (testsData.length > 0 && testsData[0].tests.length > 0) {
          const names = testsData[id - 1].tests.map(item => item.name);
          console.log("Название первого теста:", names);
          setName([names]); 
        } else {
          console.warn("Нет доступных тестов.");
          setName([]);
        }
      } catch (error) {
        console.error('Ошибка при получении тестов:', error);
        setName([]);
      }
    };

    fetchTest();
  }, [setName]); 

  return null;
};
