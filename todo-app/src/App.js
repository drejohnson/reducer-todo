import React, { useEffect, useState, useReducer } from 'react';
import styled from 'styled-components/macro';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import GlobalStyles from './styles/GlobalStyles';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: action.payload.todos,
      };
    case 'COMPLETE_TODO':
      return {
        ...state,
        todos: action.payload.todos,
      };
    case 'CLEAR_TODO':
      return {
        ...state,
        todos: action.payload.todos,
      };
    default:
      return state;
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

function App() {
  const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [
      {
        item: 'Learn about reducers',
        completed: false,
        id: Date.now(),
      },
    ],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = title => {
    const newTodo = {
      id: Date.now(),
      item: title,
      completed: false,
      completedAt: null,
    };
    dispatch({
      type: 'ADD_TODO',
      payload: { todos: [...state.todos, newTodo] },
    });
    localStorage.setItem('todos', JSON.stringify(state.todos));
  };

  const markComplete = id => {
    const newTodos = [...state.todos];
    newTodos
      .filter(todo => todo.id === id)
      .map(todo => {
        todo.completed = !todo.completed;
        todo.completedAt = dayjs().format('MMMM D, YYYY h:mm A');
      });
    dispatch({
      type: 'COMPLETE_TODO',
      payload: { todos: newTodos },
    });
  };

  const clearTodos = e => {
    e.preventDefault();
    const newTodos = state.todos.filter(todo => todo.completed !== true);
    dispatch({
      type: 'CLEAR_TODO',
      payload: { todos: [...newTodos] },
    });
    localStorage.setItem('todos', JSON.stringify(state.todos));
  };

  useEffect(() => {
    dayjs.extend(relativeTime);
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state]);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <TodoForm addTodo={addTodo} clearTodos={clearTodos} />
        <TodoList todos={state.todos} markComplete={markComplete} />
      </Wrapper>
    </>
  );
}

export default App;
