import React from "react"
import {Todo} from "./types"
import TodoItem from "./TodoItem"
type TodoListProps = {
    todos: Todo[]

}
const TodoList: React.FC<TodoListProps> = (props) => {
    const todoItems: JSX.Element[] = []
    for (const todo of props.todos) {
      const item = <TodoItem todo={todo}/>
      todoItems.push(item)
    }

    return (
        <div>
            {todoItems}
        </div>
    )
}

export default TodoList