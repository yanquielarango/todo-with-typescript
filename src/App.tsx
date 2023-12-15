

import { FormEvent, useState } from 'react';

import './style.css';
import TodoItem from './TodoItem';

type Props = {
  name : string
}

export type Todo = {
  id: string
  name: string
  complete: boolean
}

export const App = ({name}: Props) => {

  const [todos, setTodo] = useState<Todo[]>([])

  function createTodo(e: FormEvent ): void {
     e.preventDefault()
     const formData = new FormData(e.currentTarget) 

     const title = formData.get('title').valueOf()
     if (typeof title !== 'string' || title.length === 0) {
       throw new Error("Invalid Title")
     }

      
      setTodo([...todos, {
         name: title,
        id: crypto.randomUUID(),
        complete: false

      }])
     
      console.log(todos)
    
     }



    const toggleTodo = (id: string, complete: boolean)  => {
        setTodo(todos.map((todo) => {
          if (todo.id === id) {
            return {...todo, complete}
          }

          return todo

        }))
    }


  return (
    <div>
      <h1>Hello {name} </h1>
      <p>Start creating some task :)</p>

      <form onSubmit={createTodo}>
        <input  type='text' name='title' />

        <div>
          <button type='submit'>Add</button>
        </div>
      </form>

      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
        ))}
      </ul>
    </div>
  );
};
