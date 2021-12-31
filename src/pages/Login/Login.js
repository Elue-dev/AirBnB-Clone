import { useState } from 'react';
import { useDispatch } from 'react-redux'
import openModal from '../../actions/openModal';
import SignUp from './SignUp';
import { baseUrl } from '../../api';
import swal from 'sweetalert';
import regAction from '../../actions/regAction'
import axios from 'axios';
import './Login.css';

function Login(){

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const dispatch = useDispatch()

    const linkSignUp = () => {
        dispatch(openModal('open', <SignUp />))
    }

    const handleVisibility = () => {
        const eye = document.getElementById('eye')
        const passwordInput = document.querySelector('.password')
        if(passwordInput.type === 'password'){
            passwordInput.setAttribute('type','text')
            eye.className = 'fas fa-eye'
        } else {
            passwordInput.setAttribute('type', 'password')
            eye.className = 'fas fa-eye-slash'
        }
    }

    const submitLogin = async (e) => {
        e.preventDefault()
        const url = `${baseUrl}/users/login`
        const data = {
            email: email,
            password: password
        }

        const resp = await axios.post(url, data)
        const token = resp.data.token
        console.log(token)
        console.log(resp.data)

        if(resp.data.msg === 'noEmail'){
            swal({
                title: "That email is not registered.",
                icon: "error",
              })
        }

        if(resp.data.msg === 'badPass'){
            swal({
                title: "Invalid email/password",
                text: "We don't have a match for that and password.",
                icon: "error",
              })
        }

        if(resp.data.msg === 'loggedIn'){
            swal({
                title: "success",
                icon: "success",
              })

            //   here is where we call our register action to update our auth reducer
            dispatch(regAction(resp.data)) //sending out everything we got from the server, not just the token
        }
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
                    <div onClick={handleVisibility}><input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className="browser-default" placeholder="Email address" /><i id='eye' className="fas fa-eye-slash"></i></div>
                    <input type="password" value={password} onChange={(e)=> setpassword(e.target.value)} className="browser-default password" placeholder="Password" />
                    <button className="sign-up-button">Login</button>
                    <div className="divider"></div>
                    <div className='access'>Don't have an account? <span onClick={linkSignUp}>Sign up</span></div>
                </form>
            </div>
        )
}

export default Login;