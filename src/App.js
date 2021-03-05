import React, { useState, useRef, useCallback } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate.js';
import TodoInsert from './components/TodoInsert.js';
import TodoList from './components/TodoList.js';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '티라미슈 먹기',
      checked: true,
    },
    {
      id: 2,
      text: '귤 먹기',
      checked: true,
    },
    {
      id: 3,
      text: '견과류 먹기',
      checked: false,
    },
  ]);
  // 4번쨰부터 REF를 이용해서 변수를 담습니다.
  const refId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = { id: refId.current, text, checked: false };
      setTodos(todos.concat(todo));
      refId.current += 1; //id값에 1씩 더합니다.
    },
    [todos],
  );

  return (
    <>
      <br />
      <TodoTemplate>
        <TodoList todos={todos} />
        <TodoInsert onInsert={onInsert} />
      </TodoTemplate>
    </>
  );
};

export default App;
