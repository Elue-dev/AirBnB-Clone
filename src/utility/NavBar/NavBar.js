import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import openModal from '../../actions/openModal'
import '../NavBar/NavBar.css'
import Login from '../../pages/Login/Login';
import SignUp from '../../pages/Login/SignUp';

function NavBar() {
    const location = useLocation();
    const dispatch = useDispatch()

    const [showMenu, setShowMenu] = useState(false)

        let navColor = 'transparent';
        if(location.pathname !== '/'){
            navColor = 'black';
        }

        const removeMedia = () => {
            setShowMenu(false)
        }

        const modalHandler = () => {
            dispatch(openModal('open', <SignUp />))
        }

        const media = () => {
            setShowMenu(false)
            dispatch(openModal('open', <SignUp />))
        }

        return (
            <div className='container-fluid nav'>
                <nav className={navColor}>
                    <div className='nav-wrapper margin'>
                        <Link to='/' className='left'><i className="fab fa-airbnb"></i><span>AirBnB</span></Link>
                        <div className={showMenu ? 'overlay show' : 'overlay'}></div>
                        <ul id="nav-mobile" className={showMenu ? 'right media' : 'right'}>
                            <li onClick={removeMedia}><Link to="/">English (US)</Link></li>
                            <li onClick={removeMedia}><Link to="/">$ USD</Link></li>
                            <li onClick={removeMedia}><Link to="/">Become a host</Link></li>
                            <li onClick={removeMedia}><Link to="/">Help</Link></li>
                            <li onClick={modalHandler, media} className='login-signup'>Sign Up</li>
                            <li onClick={modalHandler, media} className='login-signup'>Log In</li>
                            <i onClick={()=>setShowMenu(false)} className="fas fa-times"></i>
                        </ul>
                        <i onClick={()=>setShowMenu(!showMenu)} className='hamburger fas fa-bars'></i>
                    </div>  
                </nav>
            </div>
        )
}

export default NavBar