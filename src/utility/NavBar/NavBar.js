import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import openModal from '../../actions/openModal'
import '../NavBar/NavBar.css'
import Login from '../../pages/Login/Login';
import SignUp from '../../pages/Login/SignUp';

function NavBar() {
    const location = useLocation();
    const dispatch = useDispatch()

        let navColor = 'transparent';
        if(location.pathname !== '/'){
            navColor = 'black';
        }

        return (
            <div className='container-fluid nav'>
                <nav className={navColor}>
                    <div className='nav-wrapper margin'>
                        <Link to='/' className='left'><i className="fab fa-airbnb"></i><span>airbnb</span></Link>
                        <ul id="nav-mobile" className="right">
                            <li><Link to="/">English (US)</Link></li>
                            <li><Link to="/">$ USD</Link></li>
                            <li><Link to="/">Become a host</Link></li>
                            <li><Link to="/">Help</Link></li>
                            <li className='login-signup' onClick={()=>dispatch(openModal('open', <SignUp />)) }>Sign Up</li>
                            <li className='login-signup' onClick={()=>dispatch(openModal('open', <Login />)) }>Log In</li>
                        </ul>
                    </div>  
                </nav>
            </div>
        )
}

export default NavBar