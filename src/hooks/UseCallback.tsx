import { useCallback, useState } from 'react';
import Todos from './UseCallbackTodos';

export default function UseCallbackTest() {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
      <hr />
      <Todos todos={todos} addTodo={addTodo} />
    </>
  );

}
