import { useEffect, useState } from 'react';

export const LoadTest = ({ setTest, testName, id }) => {
  // useEffect(() => {

  //   setTest([]); // Очищаем старые данные

  //   const fetchTest = async () => {
  //     try {
  //       let data = await import(`../tests/${id}/${testName}`);
  //       setTest(data.test);
  //     } catch (error) {
  //       console.error('Ошибка при получении вопросов теста:', error);
  //       setTest(null);
  //     }
  //   };

  //   fetchTest();
  // }, [id, setTest]); 

  // return null;
  useEffect(() => {

    setTest([]); // Очищаем старые данные

    const fetchTest = async () => {
      try {
        let data = await import(`../tests/tests`);
        data = data.default.testfile[id]
        setTest(data.test);
      } catch (error) {
        console.error('Ошибка при получении вопросов теста:', error);
        setTest(null);
      }
    };

    fetchTest();
  }, [id, setTest]); 

  return null;
};
