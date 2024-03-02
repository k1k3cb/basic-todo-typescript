import { useRef } from 'react';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}

export const InpulField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className='input'
      onSubmit={event => {
        handleAdd(event);
        inputRef.current?.blur();
      }}
    >
      <input
        type='text'
        placeholder='Enter a Task'
        value={todo}
        ref={inputRef}
        onChange={e => setTodo(e.target.value)}
        className='input__box'
      />
      <button type='submit' className='input__submit'>
        GO
      </button>
    </form>
  );
};


