import React, { useState, useRef, useCallback } from 'react';
import { RiMenuAddFill } from 'react-icons/ri'; //https://react-icons.github.io/react-icons/icons?name=md
import './TodoInsert.scss';

const TodoInsert = () => {
  const [value, setValue] = useState('');

  const change = useCallback((e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }, []);

  return (
    <form className="TodoInsert">
      <input placeholder="input your plan" value={value} onChange={change} />
      <button type="submit">
        <RiMenuAddFill />
      </button>
    </form>
  );
};

export default TodoInsert;
