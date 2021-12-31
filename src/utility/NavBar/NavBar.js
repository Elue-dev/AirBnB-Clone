import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import openModal from '../../actions/openModal'
import '../NavBar/NavBar.css'
import SignUp from '../../pages/Login/SignUp';
import Login from '../../pages/Login/Login';

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

        const SignModalHandler = () => {
            dispatch(openModal('open', <SignUp />))
        }
        const LogModalHandler = () => {
            dispatch(openModal('open', <Login />))
        }

        const SignMedia = () => {
            setShowMenu(false)
            dispatch(openModal('open', <SignUp />))
        }
        const LogMedia = () => {
            setShowMenu(false)
            dispatch(openModal('open', <Login />))
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
                            <li onClick={SignModalHandler, SignMedia} className='login-signup'><a>Sign Up</a></li>
                            <li onClick={LogModalHandler, LogMedia} className='login-signup'><a>Log In</a></li>
                            <i onClick={removeMedia} className="fas fa-times"></i>
                        </ul>
                        <i onClick={()=>setShowMenu(!showMenu)} className='hamburger fas fa-bars'></i>
                    </div>  
                </nav>
            </div>
        )
}

export default NavBar