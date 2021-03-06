import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onUpdate }) => {
  //todos : App.js에서 props로 전달된 것
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
