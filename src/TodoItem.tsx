import type { Todo as TodoType } from './App'


type TodoItemProps =  TodoType  & {
    toggleTodo: (id: string, complete: boolean) => void
}


function TodoItem({id, name, complete, toggleTodo}: TodoItemProps) {
    return (
        <li key={id}>
            <input  type='checkbox' defaultChecked={complete}  onChange={(e) => toggleTodo(id, e.target.checked) }/>
            <label style={{textDecoration: complete ? "line-through" : "none" }} > 
                {name}
             </label>

        </li>
    )
}

export default TodoItem