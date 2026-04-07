function Button(props) {
    // 부모 컴포넌트에서 넘겨주는 속성들(className, type, children)
    const {children, ...rest} = props; // children은 텍스트 영역에, 나머지는 속성으로
    return (
        <button {...rest}>{children}</button>
    )
}

export default Button;