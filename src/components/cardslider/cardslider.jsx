import './cardslider.css'
import Card from '../cards/card'
import Card1 from '../../assets/images/card1.png'
import Card2 from '../../assets/images/card2.png'
import Card3 from '../../assets/images/card3.png'

function CardSlider(){
    return(
        <div className="container">
         <div className="carousel">
            <Card image={Card1}/>
            <Card image={Card2}/>
            <Card image={Card3}/>
            <Card image={Card1}/>
            <Card image={Card2}/>
         </div>
        </div>
    )
}

export default CardSlider