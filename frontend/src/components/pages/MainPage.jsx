import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../elements/Button';

export function MainPage({}) {
  return (
    <>
    <h1>Главная страница</h1>
      <div>
        <Link to={`/themes`}>
              <Button text='Перейті на странічку с темамі' backgroundColor="#4CAF50" hoverColor="#45a049"></Button>
        </Link>
      </div>
    </>
  );
}