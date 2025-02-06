import React from 'react';
import { LessonLoader } from '../connection/loadLessons';
import { Link } from 'react-router-dom';
import { Button } from '../../elements/Button';
import { useNavigate } from 'react-router-dom'; // Импортируйте useNavigate
import { deleteLesson } from '../connection/lesson/deleteLesson';
import { useParams } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

export function LessonPage({ lessons, setLessons }) {
  const userId = JSON.parse(localStorage.getItem('user_id'));
  const userRole = localStorage.getItem('role');

  const { module_id } = useParams();
  const navigate = useNavigate(); // Инициализация navigate для навигации
  
  const handleSelectChange = (lessonId, action) => {
    switch (action) {
      case 'tasks':
        navigate(`/tasks/${lessonId}/${userId}`); // Используйте navigate для навигации
        break;
      case 'edit':
        navigate(`/edit/lesson/${lessonId}`); // Передача moduleId в путь редактирования
        break;
      case 'progress':
        navigate(`/progress/lesson/${lessonId}`); // Передача moduleId в путь редактирования
        break;
      case 'delete':
        if (window.confirm('Вы уверены, что хотите удалить этот урок?')) {
          handleDelete(lessonId); // Если пользователь подтвердил, вызываем handleDelete
          window.location.reload();
        }
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    navigate(`/add/lesson/${module_id}`); // Передача moduleId в путь редактирования
  };

  const handleDelete = async (lessonId) => {
    try {
      const statusCode = await deleteLesson(lessonId); // Вызов функции
      
      if (statusCode && statusCode !== 200) {
        alert("Произошла ошибка при отправке данных на сервер.")
      } 
      else{
        alert("Урок успешно удалён");
        window.location.reload();
      }
    } catch (error) {
      console.error('Ошибка при отправке данных на сервер:', error);
      alert("Произошла ошибка при отправке данных на сервер. Пожалуйста, попробуйте еще раз.")
    }
  };
  
  const styles = {
    dropdownContainer: {
      margin: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    select: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #4CAF50',
      borderRadius: '5px',
      backgroundColor: 'white',
      color: '#333',
      cursor: 'pointer',
      transition: 'border-color 0.3s',
    },
    selectHover: {
      borderColor: '#45a049',
    }
  };


  return (
    <>
      <LessonLoader setLessons={setLessons} />
      <div style={{ paddingBottom: '50px' }}>
        <h1>Уроки модуля</h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            maxWidth: '1200px',
            justifyContent: 'center',
            margin: '0 auto',
          }}
        >
          {lessons.map((lesson, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                width: '300px',
                height: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ position: 'relative', paddingTop: '10px', flex: '1' }}>
                {/* <h2>{lesson.course_name}</h2> */}
                <h2>{lesson.name}</h2>
                <p style={{ flexGrow: 1 }}>{lesson.description}</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
    
                {userRole==='"user"'  && ( // Проверяем, есть ли роль
                  <div style={{position: 'absolute', bottom: '30px', width: '100%'}}>
                     <p>Статус выполнения: <b>{lesson.mark !== null ? lesson.mark : 'Не начато'}</b></p>
                    <Link  to={`/tasks/${lesson.id}/${userId}`}>
                      <Button text='Перейти к заданиям' backgroundColor="#4CAF50" hoverColor="#45a049" />
                    </Link>
                  </div>
                )}
              </div>
              {userRole !== '"user"' && (
                  <div style={{ padding: '10px', marginBottom: '20px' }}>
                    <div style={styles.dropdownContainer}>
                      <select
                        onChange={(e) => handleSelectChange(lesson.id, e.target.value)} // Передача moduleId и выбранного действия
                        style={styles.select}
                        defaultValue=""
                      >
                        <option value="" disabled>Выберите действие</option>
                        <option value="tasks">Перейти к заданиям</option>
                        <option value="progress">Посмотреть успеваемость</option>
                        <option value="edit">Редактировать</option>
                        <option value="delete">Удалить</option>
                      </select>
                    </div>
                  </div>
                )}
            </div>
          ))}
          {userRole !== '"user"' && (
            <button
            onClick={handleClick}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              cursor: 'pointer',
              fontSize: '24px',
            }}
          >
            <FaPlus/>
          </button>
          )}
        </div>
      </div>
    </>
  );
}