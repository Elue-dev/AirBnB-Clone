import { useState } from 'react';
import { useDispatch } from 'react-redux'
import openModal from '../../actions/openModal';
import './Login.css';
import SignUp from './SignUp';

function Login(){

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const dispatch = useDispatch()

    const linkSignUp = () => {
        dispatch(openModal('open', <SignUp />))
    }

    const submitLogin = e => {
        e.preventDefault()
        console.log(email)
        console.log(password)
    }

        return(
            <div className="login-form">
                <form onSubmit={submitLogin} >
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect With Google</button>
                    <div className="login-or center">
                        <span>or</span>
                        <div className="or-divider"></div>
                    </div>
                    <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className="browser-default" placeholder="Email address" />
                    <input type="password" value={password} onChange={(e)=> setpassword(e.target.value)} className="browser-default" placeholder="Password" />
                    <button className="sign-up-button">Login</button>
                    <div className="divider"></div>
                    <div className='access'>Don't have an account? <span onClick={linkSignUp}>Sign up</span></div>
                </form>
            </div>
        )
}

export default Login;