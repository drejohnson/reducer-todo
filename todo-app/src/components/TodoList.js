import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, markComplete }) => {
  return (
    <div>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} markComplete={markComplete} />;
      })}
    </div>
  );
};

export default TodoList;
