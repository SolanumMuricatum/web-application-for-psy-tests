import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируйте useNavigate
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ModuleLoader } from '../connection/loadModules';
import { Button } from '../../elements/Button';
import { Link } from 'react-router-dom';
import { deleteModule } from '../connection/modules/deleteModule';
import { FaPlus } from 'react-icons/fa';

export function ModulePage({ modules, setModules }) {
  const userId = JSON.parse(localStorage.getItem('user_id'));
  const userRole = localStorage.getItem('role');
  const { id } = useParams();
  const navigate = useNavigate(); // Инициализация navigate для навигации
  
  const handleSelectChange = (moduleId, action) => {
    switch (action) {
      case 'lessons':
        navigate(`/lessons/${moduleId}/${userId}`); // Используйте navigate для навигации
        break;
      case 'edit':
        navigate(`/edit/module/${moduleId}`); // Передача moduleId в путь редактирования
        break;
      case 'delete':
        if (window.confirm('Вы уверены, что хотите удалить этот модуль?')) {
          handleDelete(moduleId); // Если пользователь подтвердил, вызываем handleDelete
          window.location.reload();
        }
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    navigate(`/add/module/${id}`); // Передача moduleId в путь редактирования
  };

  const handleDelete = async (moduleId) => {
    try {
      const statusCode = await deleteModule(moduleId); // Вызов функции
      
      if (statusCode && statusCode !== 200) {
        alert("Произошла ошибка при отправке данных на сервер.")
      } 
      else{
        alert("Модуль успешно удалён");
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
      <ModuleLoader setModules={setModules} />
      <div style={{ paddingBottom: '50px' }}>
        <h1>Модули курса</h1>
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
          {modules.map((module, index) => (
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
              <div style={{ padding: '10px', flex: '1' }}>
                <h2>{module.name}</h2>
                <p style={{ flexGrow: 1 }}>{module.description}</p>
              </div>
              {userRole === '"user"' && (
                <div style={{ padding: '10px', marginBottom: '20px' }}>
                  <Link to={`/lessons/${module.id}/${userId}`}>
                    <Button text='Перейти к урокам' backgroundColor="#4CAF50" hoverColor="#45a049" />
                  </Link>
                </div>
              )}
              {userRole !== '"user"' && (
                <div style={{ padding: '10px', marginBottom: '20px' }}>
                  <div style={styles.dropdownContainer}>
                    <select
                      onChange={(e) => handleSelectChange(module.id, e.target.value)} // Передача moduleId и выбранного действия
                      style={styles.select}
                      defaultValue=""
                    >
                      <option value="" disabled>Выберите действие</option>
                      <option value="lessons">Перейти к урокам</option>
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