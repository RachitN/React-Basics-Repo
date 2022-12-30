const Button = props=>{
    return (
        <div>
            <button className={props.className} type={props.type || 'button'} onClick={props.onClick}>
                {props.text}
            </button>
        </div>
    )
}

export default Button