import React from 'react';
import { RiMenuAddFill } from 'react-icons/ri'; //https://react-icons.github.io/react-icons/icons?name=md
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="input your plan" />
      <button type="submit">
        <RiMenuAddFill />
      </button>
    </form>
  );
};

export default TodoInsert;
