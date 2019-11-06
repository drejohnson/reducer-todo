import React from 'react';
import styled from 'styled-components/macro';
import Todo from './Todo';

const List = styled.ul`
  width: 80%;
  padding-left: 3.5rem;

  li {
    font-size: 1.25rem;
  }
`;

const TodoList = ({ todos, markComplete }) => {
  return (
    <List>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} markComplete={markComplete} />;
      })}
    </List>
  );
};

export default TodoList;
