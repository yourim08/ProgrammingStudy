import Button from "./Button.jsx"

export default function TodoAdder() {
    return (
        <>
            <form className='todo__form'>
                <input className='todo__input' type="text" placeholder="할 일을 입력하세요" />
                <Button className='todo__button todo__button--add' type="submit">Add</Button>
            </form>
        </>
    )
}