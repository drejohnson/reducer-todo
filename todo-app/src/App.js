import React, { useReducer } from 'react';
import styled from 'styled-components/macro';

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
      };
    case 'CLEAR_TODO':
      return {
        ...state,
      };
    default:
      return state;
  }
};

function App() {
  const initialState = {
    todos: [
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
    };
    dispatch({
      type: 'ADD_TODO',
      payload: { todos: [...state.todos, newTodo] },
    });
  };

  return (
    <>
      <GlobalStyles />
      <div className='App'>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={state.todos} />
      </div>
    </>
  );
}

export default App;
