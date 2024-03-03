import { useEffect, useRef, useState } from 'react';
import { Todo } from './model';
import './styles.css';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);


const inputRef=useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  

  const handleDelete = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleDone = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleEdit = (event: React.FormEvent, id: string) => {
    event.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };


  return (
    <form className='todos__single' onSubmit={event=>handleEdit(event, todo.id)}>
      {edit ? (
        <input
          value={editTodo}
          onChange={event => setEditTodo(event.target.value)}
          className='todos__single--text'
          ref={inputRef}
          
        />
      ) : todo.isDone ? (
        <s className='todos__single--text'>{todo.todo}</s>
      ) : (
        <span className='todos__single--text'>{todo.todo}</span>
      )}

      <div>
        <img
          src='/assets/icons/edit-icon.svg'
          alt='edit icon'
          className='icon'
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        />
        <img
          src='assets/icons/delete-icon.svg'
          alt='delete icno'
          className='icon'
          onClick={() => handleDelete(todo.id)}
        />{' '}
        <img
          src='assets/icons/done-icon.svg'
          alt='done icon'
          className='icon'
          onClick={() => handleDone(todo.id)}
        />
      </div>
    </form>
  );
};
export default SingleTodo;
