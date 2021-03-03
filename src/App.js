import React, { useState } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate.js';
import TodoInsert from './components/TodoInsert.js';
import TodoList from './components/TodoList.js';

const App = () => {
  return (
    <>
      <br />
      <TodoTemplate>
        <TodoList />
        <TodoInsert />
      </TodoTemplate>
    </>
  );
};

export default App;
