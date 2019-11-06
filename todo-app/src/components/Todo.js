import React from 'react';

const Todo = ({ todo: { id, item, completed }, markComplete }) => {
  return (
    <li
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
      onClick={() => markComplete(id)}
    >
      {item}
    </li>
  );
};

export default Todo;
