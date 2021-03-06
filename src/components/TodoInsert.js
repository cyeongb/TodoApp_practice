import React, { useState, useCallback } from 'react';
import { RiMenuAddFill } from 'react-icons/ri'; //https://react-icons.github.io/react-icons/icons?name=md
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  console.log(`onInsert객체 : ${onInsert}`);
  const [value, setValue] = useState('');

  const change = useCallback((e) => {
    console.log('==============useCallback()change()');
    console.log('e.target.value : ', e.target.value);
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      console.log('==============useCallback()_onSubmit()');
      console.log('e.target.value :', e.target.value);
      console.log('value : ', value);
      onInsert(value);
      setValue('');
      //submit 이벤트가 새로고침을 발생시키기때문에 브라우저 update방지로 preventDefault()를 호출합니다.
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert">
      <input placeholder="input your plan" value={value} onChange={change} />
      <button
        className="btn"
        type="submit"
        onClick={onSubmit}
        onKeyPress={onSubmit}
      >
        <RiMenuAddFill />
      </button>
    </form>
  );
};

export default TodoInsert;
