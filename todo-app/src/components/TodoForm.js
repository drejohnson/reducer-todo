import React, { useState } from 'react';
import styled from 'styled-components/macro';

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  appearance: none;
  -webkit-appearance: none;
  color: #2c3e50;
  font-family: 'Helvetica', arial, sans-serif;
  font-size: 18px;
  border: 1px solid #ecf0f1;
  background: #ecf0f1;
  width: 60%;
  height: 60px;
  padding: 1rem;
  margin: 2rem 0;
  display: inline-block !important;
  visibility: visible !important;
  border-radius: 30px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  display: block;
  width: 175px;
  padding: 0.875rem 0;
  margin: 1rem 0;
  margin-left: 1rem;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

const TodoForm = ({ addTodo, clearTodos }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = e => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input type='text' value={newTodo} onChange={handleChange} />
        <Button>Add</Button>
        <Button onClick={clearTodos}>Clear Completed</Button>
      </Form>
    </div>
  );
};

export default TodoForm;
