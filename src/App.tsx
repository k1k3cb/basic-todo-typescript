import React, { useState } from 'react';
import { v4 } from 'uuid';
import './App.css';
import { InpulField } from './components/InpulField';
import { TodoList } from './components/TodoList';
import { Todo } from './components/model';

export const App: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Array<Todo>>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();

    if (newTodo) {
      setTodos([...todos, { id: v4(), todo: newTodo, isDone: false }]);
      setNewTodo('');
    }
  };

  return (
    <>
      <div className='App'>
        <span className='heading'>Taskify</span>
        <InpulField todo={newTodo} setTodo={setNewTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </>
  );
};
