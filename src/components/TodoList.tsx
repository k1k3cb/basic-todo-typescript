import React from 'react';
import SingleTodo from './SingleTodo';
import { Todo } from './model';
import './styles.css';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

export const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos
}) => {
  return (
    <div className='container'>
      <div className='todos'>
        <span className='todos__heading'>Active Tasks</span>
        {todos.map(todo => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          />
        ))}
      </div>
      <div className='todos remove'>
        <span className='todos__heading'>Completed Tasks</span>
        {completedTodos?.map(todo => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={completedTodos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          />
        ))}
      </div>
    </div>
  );
};
