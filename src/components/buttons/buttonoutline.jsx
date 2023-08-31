import './button.css'

function ButtonOutline(props){
    return (
        <button className='btn-outline'>
     {props.title} <i className={props.icon}></i>
        </button>
    )
}
export default ButtonOutline