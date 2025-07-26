import '../styles/navbar.css';
import logo from '../images/logo-icon.png';

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className='logo-section'>
                <a href='/'><img src={logo} className='logo-img'/></a>
            </div>
            <div className='tags-section'>
                <ul className='nav-list'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/discover'>Discover</a></li>
                    <li><a href='#'>Plan</a></li>
                    <li><a href='/chatbot'>ChatBot</a></li>
                    <li><a href='#'>Contact Us</a></li>
                </ul>
            </div>
            <div className='login-section'>
                <button className='login-button'>Login</button>
            </div>
        </nav>
    );
}

export default Navbar;