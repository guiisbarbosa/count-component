import './button.css'

const Button = ({name, compClass, onClick}) => {
    return (
        <button className={compClass} onClick={onClick}>{name}</button>
    )
}

export default Button