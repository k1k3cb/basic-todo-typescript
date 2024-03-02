import { Todo } from './model';
import './styles.css';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form className='todos__single'>
      <span className='todos__single--text'>{todo.todo}</span>
      <div>
        <img
          src='/assets/icons/edit-icon.svg'
          alt='edit icon'
          className='icon'
        />
        <img
          src='assets/icons/delete-icon.svg'
          alt='delete icno'
          className='icon'
        />{' '}
        <img
          src='assets/icons/done-icon.svg'
          alt='done icon'
          className='icon'
        />
      </div>
    </form>
  );
};
