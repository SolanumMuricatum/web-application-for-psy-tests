import { useEffect, useState } from 'react';

export const LoadTopic = ({ setTopic }) => {
  useEffect(() => {

    setTopic([]); // Очищаем старые данные

    const fetchTest = async () => {
      try {
        let data = await import(`../tests/tests`);
        setTopic(data.default.testsfile.map(item => item.theme));
        console.log(data.default.testsfile.map(item => item.theme));
      } catch (error) {
        console.error('Ошибка при получении тем:', error);
        setTopic(null);
      }
    };

    fetchTest();
  }, [setTopic]); 

  return null;
};
