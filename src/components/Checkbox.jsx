export default function Checkbox(props){
    const {children, id, ...rest} = props;
    return (
        <>
            <input className='todo__check' type="checkbox" id={`chk-${id}`} {...rest}/>
            <label className='todo__label' htmlFor={`chk-${id}`}>{children}</label>
        </>
    )
}