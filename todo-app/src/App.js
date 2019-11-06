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
        todos: action.payload,
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

  const markComplete = id => {
    const newTodos = [...state.todos];
    newTodos
      .filter(todo => todo.id === id)
      .map(todo => (todo.completed = !todo.completed));
    dispatch({
      type: 'COMPLETE_TODO',
      payload: newTodos,
    });
  };

  const clearTodos = e => {
    e.preventDefault();
    const newTodos = state.todos.filter(todo => todo.completed !== true);
    dispatch({
      type: 'CLEAR_TODO',
      payload: { todos: [...newTodos] },
    });
  };

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
