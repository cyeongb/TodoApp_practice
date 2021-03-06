import React from 'react';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import './TodoListItem.scss';
import cl from 'classnames';

const TodoListItem = ({ todo, onRemove, onUpdate }) => {
  const { id, text, checked } = todo;
  console.log('const TodoListItem _todo.id > ', todo.id);

  const remove = (id) => {
    window.confirm('정말 지우시겠습니까?') ? onRemove(id) : alert('삭제취소');
  };

  return (
    <div className="TodoListItem">
      <div className={cl('checkbox', { checked })} onClick={() => onUpdate(id)}>
        {checked ? <IoMdCheckboxOutline /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => remove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
