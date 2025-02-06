import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const LoadTest = ({ setTest, testName }) => {
  const { id } = useParams(); 
  useEffect(() => {

    setTest([]); // Очищаем старые данные

    const fetchTest = async () => {
      try {
        let data = await import(`../tests/${id}/${testName}`);
        console.log(data.test_1[0].questions[0]);
        setTest(data.test_1[0]);
      } catch (error) {
        console.error('Ошибка при получении вопросов теста:', error);
        setTest(null);
      }
    };

    fetchTest();
  }, [id, setTest]); 

  return null;
};
