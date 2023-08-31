import './iconcard.css'

function IconCard(props){
    return (
        <button className='card-outline'>
          <i className={props.icon}></i>
           </button>
    )
}

export default IconCard