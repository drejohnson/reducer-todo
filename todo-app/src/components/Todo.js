import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components/macro';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

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

dayjs.extend(relativeTime);

const Todo = ({ todo: { id, item, completed, completedAt }, markComplete }) => {
  useEffect(() => {
    dayjs.extend(relativeTime);
  }, [completedAt, completed, markComplete]);
  return (
    <Wrapper>
      <li
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
        onClick={() => markComplete(id)}
      >
        {item}
      </li>
      {completed && <span>completed: {dayjs().to(dayjs(completedAt))}</span>}
    </Wrapper>
  );
};

export default Todo;
