import { useEffect, useState } from 'react';

export const LoadTestName = ({ setName, id }) => {
  useEffect(() => {

    setName([]); // Очищаем старые данные

    const fetchTest = async () => {
      try {
        let data = await import(`../tests/tests`);
        //data = data.default.testsfile.map(item => ({ theme: item.theme }));
        //data = data.map(item =>item.name);
        const firstTestName = data.testsfile[0].theme[0].name;
console.log(firstTestName); // "Тест 
        setName(data);
        console.log(data);
      } catch (error) {
        console.error('Ошибка при получении names of the tests:', error);
        setName(null);
      }
    };

    fetchTest();
  }, [setName]); 

  return null;
};
