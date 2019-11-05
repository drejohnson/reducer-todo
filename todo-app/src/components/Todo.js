import React from 'react';

const Todo = ({ todo: { id, item, completed }, markComplete }) => {
  return (
    <div>
      <div
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
        onClick={() => markComplete(id)}
      >
        {item}
      </div>
    </div>
  );
};

export default Todo;
