import './todolist.css';
import Button from './components/Button.jsx';

function TodoListApp() {
  return (
    <div className="todo">
      <h1 className="todo__title">ToDo List</h1>
      <form className='todo__form'>
        <input className='todo__input' type="text" placeholder="할 일을 입력하세요"/>
        <Button className='todo__button todo__button--add' type="submit">Add</Button>
      </form>
      <ul className='todo__list'>
        <li className="todo__item todo__item--empty">
          <p>할 일 없음</p>
        </li>  
        <li className='todo__item todo__item--complete'>
          <input className='todo__check' type="checkbox" id="chk-1"/>
          <label className='todo__label' htmlFor="chk-1">놀기</label>
          <Button className='todo__button todo__button--edit'>✏️</Button>
          <Button className='todo__button todo__button--delete'>❌</Button>
        </li>        
      </ul>
    </div>
  )
}

export default TodoListApp;