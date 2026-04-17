import { useState } from "react";
import Button from "./Button.jsx"

export default function TodoAdder({ addTodo }) {
    const [inputTodo, setInputTodo] = useState(""); // inputTodo: 사용자가 입력한 text
    const handleSubmit = (event) => { // submit 했을 때 일어나는 event
        event.preventDefault();
        
        // inputTodo에서 사용자가 입력한 텍스트 가져오기
        if(!inputTodo) return; 
        addTodo(inputTodo.trim());
        setInputTodo('');
        // addTodo에 그 텍스트 넣기
    };

    return (
        <>
            <form className='todo__form' onSubmit={handleSubmit}>
                {/* 사용자가 입력할 때 setInputTodo()호출 되어서, inputTodo값에 설정 */}
                <input
                    className='todo__input'
                    type="text"
                    placeholder="할 일을 입력하세요"
                    value={inputTodo}
                    onChange={(event) => setInputTodo(event.target.value)}
                />
                <Button className='todo__button todo__button--add' type="submit">Add</Button>
            </form>
        </>
    )
}