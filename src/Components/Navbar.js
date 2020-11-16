import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';
import AuthOptions from './Auth/AuthOptions';


function Navbar() {
    const [click,setClick] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    window.addEventListener('resize',showButton);

    return (
        <>
          <nav className="navbar">
            <div className="navbar-Container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                MVZ <i className="fab fa-typo3"></i>
                </Link>
                
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                            Home
                        </Link>
                    </li>
                    <li>
                    <AuthOptions />
                    </li>
        
                </ul>

              
            </div>
          </nav>  
        </>
    )
}

export default Navbar
