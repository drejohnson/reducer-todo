import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;

  span {
    color: #666;
    font-size: 0.875rem;
    margin-left: 1rem;
  }
`;

const Todo = ({ todo: { id, item, completed, completedAt }, markComplete }) => {
  return (
    <Wrapper>
      <li
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
        onClick={() => markComplete(id)}
      >
        {item}
      </li>
      {completedAt && <span>completed: {completedAt}</span>}
    </Wrapper>
  );
};

export default Todo;
