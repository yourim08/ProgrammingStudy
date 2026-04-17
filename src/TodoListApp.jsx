import { useState } from 'react';
import './todolist.css';
// import Button from './components/Button.jsx';
// import TodoItemEmpty from './components/TodoItemEmpty.jsx';
import TodoHeader from './components/TodoHeader.jsx';
// import Checkbox from './components/Checkbox.jsx';
import TodoAdder from './components/TodoAdder.jsx';
// import TodoItem from './components/TodoItem.jsx';
import TodoList from './components/TodoList.jsx';

class Todo {
  constructor(text, isCompleted){
    this.id = Date.now();             // 할 일 고유 id
    this.text = text;         // 할 일 내용
    this.isCompleted = false; // 완료 여부: 기본값 false
  }
}

function TodoListApp() {
  const[todos, setTodos] = useState([]); // 할 일 목록: 기본값 빈 리스트
  const addTodo = (text) => setTodos((todos) => [
    // 이전 todos 복사하자
    ...todos,

    // newTodo 만들자
    // 이전 todos에 추가하자
    new Todo(text)
  ]);
  // [...todos, new Todo(text)]

  return (
    <div className="todo">
      <TodoHeader />
      <TodoAdder addTodo={addTodo}/>
      <TodoList />    
    </div>
  )
}

export default TodoListApp;