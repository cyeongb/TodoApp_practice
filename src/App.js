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

  // 글 작성
  const onInsert = useCallback(
    (text) => {
      const todo = { id: refId.current, text, checked: false };
      setTodos(todos.concat(todo));
      refId.current += 1; //id값에 1씩 더합니다.
    },
    [todos],
  );

  //글 지우기
  const onRemove = useCallback(
    (id) => {
      console.log('========== onRemove()');

      console.log('id>', id);
      setTodos(todos.filter((todo) => todo.id !== id));
      //todo.id는 todos객체에있는 id / id는 해당 id
      // filter()함수를 이용해서 해당 id와 같지 않은 객체들만 return하기때문에 선택한 id의 데이터는 지워집니다.
    },
    [todos],
  );

  // 글 편집
  const onUpdate = useCallback(
    (id) => {
      console.log('========== onUpdate()');
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <>
      <br />
      <TodoTemplate>
        <TodoList todos={todos} onRemove={onRemove} onUpdate={onUpdate} />
        <TodoInsert onInsert={onInsert} />
      </TodoTemplate>
    </>
  );
};

export default App;
