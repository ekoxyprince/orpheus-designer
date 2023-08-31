import './button.css'

function Button(props){
    return (
        <button className="btn">
          <i className={props.icon}></i>{props.title}
        </button>
    )
}

export default Button