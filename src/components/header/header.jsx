import './header.css'
import Logo from '../../assets/images/Logo.svg'
function Header(){
function handleNav(e){
const navMenu = document.querySelector('.nav__menu')
const navIcon = document.getElementById('nav_icon')
navMenu.classList.toggle('active')
navIcon.classList.toggle('bx-menu-alt-right')

}
    return(
        <header>
<div className="logo">
<img src={Logo} alt="" />
</div>
<nav className="nav__bar">
    <ul className='nav__menu'>
        <li><a href="">Works</a></li>
        <li><a href="">Contributors</a></li>
        <li><a href="">Community</a></li>
        <li><a href="">Get In Touch</a></li>
        <li><i class="ri-sun-line"></i></li>
    </ul>
</nav>
<div className="icons">
<i onClick={handleNav} id='nav_icon' className='bx bx-menu-alt-left'></i>
</div>
        </header>
    )
}

export default Header