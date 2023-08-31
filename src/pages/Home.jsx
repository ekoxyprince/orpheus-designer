import Header from "../components/header/header.jsx"
import HeroImage from '../assets/images/statue-skull-gold-marble-roman-greek-sculpture-1080P-wallpaper1.png'
import CardSlider from "../components/cardslider/cardslider.jsx"
import Banner2Img from "../assets/images/banner2.png"
import Banner3Img from "../assets/images/banner3.png"
import Button from "../components/buttons/button.jsx"
import ButtonOutline from "../components/buttons/buttonoutline.jsx"
import IconCard from "../components/iconcard/iconcard.jsx"
const Home = ()=>{
 return(
     <>
     <Header/>
     <section className="section hero__section">
    <div className="hero__text">
     <h2 className="hero__header">
        Yet the story of <span className="hero__extra">orpheus</span>
     </h2>
     <p className="hero__paragraph">
     Product & Graphic Designer, with experience in delivering end-to-end UX/UI design for software products.
     </p>
     <div className="hero__btn">
        <ButtonOutline title={'WORK'} icon={'bx bx-chevron-down'}/>
        <Button title={'Free Stuff'}/>
     </div>
    </div>
    <div className="hero__image">
    <img src={HeroImage} alt="" />
    </div>
     </section>
     <section className="section banner">
        <div className="banner-title">
        <h2>RECENT NFT</h2>
        <a href="">View More</a>
        </div>
     <CardSlider/>
     </section>
     <section className="section banner2">
     <div className="banner2-title">
        <h2>Contributors</h2>
        <a href="">View More</a>
        </div>
        <div className="banner2-container">
            <div className="banner2-image">
                <img src={Banner2Img} alt="" />
            </div>
            <div className="banner2-text">
                <h2>3D Greek Statue Pack</h2>
                <h5>Over <span>200</span> Greek style sculpture</h5>
                <Button icon='bx bx-download' title={'Download'}/>
            </div>
        </div>
     </section>
     <section className="section banner2">
        <div className="banner3-container">
            <div className="banner3-text">
                <h2>Greek Statue Avatars</h2>
                <h5>+500 Greek style <span>User Avatars</span></h5>
                <Button icon='bx bx-download' title={'Download'}/>
            </div>
            <div className="banner3-image">
                <img src={Banner3Img} alt="" />
            </div>
        </div>
     </section>
     <footer>
        <div className="footer-container">
  <h2>Let’s Connect</h2>
  <h5>Get in touch for opportunities or just to say hi! 👋</h5>
  <div className="footer-icons">
    <IconCard icon={'bx bxl-linkedin'}/>
    <IconCard icon={'bx bxl-dribbble'}/>
    <IconCard icon={'bx bxl-instagram'}/>
    <IconCard icon={'bx bxl-medium'}/>
    <IconCard icon={'bx bx-envelope'}/>
  </div>
        </div>
     </footer>
     </>
 )
}

export default Home