import React, { useState, useCallback } from 'react';
import { RiMenuAddFill } from 'react-icons/ri'; //https://react-icons.github.io/react-icons/icons?name=md
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const change = useCallback((e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
      //submit 이벤트가 새로고침을 발생시키기때문에 브라우저 update방지로 preventDefault()를 호출합니다.
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert">
      <input
        placeholder="input your plan"
        value={value}
        onChange={change}
        onSubmit={onSubmit}
      />
      <button type="submit">
        <RiMenuAddFill />
      </button>
    </form>
  );
};

export default TodoInsert;
