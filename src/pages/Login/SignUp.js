import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import openModal from '../../actions/openModal'
import Login from './Login'
import { baseUrl } from '../../api'
import axios from 'axios'
import swal from 'sweetalert'
import regAction from '../../actions/regAction'
import './Login.css'
import './SingleInput.css'

export default function SignUp() {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const [changeEmail, setChangeEmail] = useState('')
    const [changePassword, setChangePassword] = useState('')

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

    const changeEmailInput = (e) => {
        setChangeEmail(e.target.value)
    }

    const changePasswordInput = (e) => {
        setChangePassword(e.target.value)
    }

    const showInputs = () => {
        setlowerPartOfForm(<SignUpInputFields
             changeEmailInput={changeEmailInput}
             changePasswordInput={changePasswordInput}
             handleVisibility={handleVisibility}
            />)
    }

    const lowerFormState = <button type='button' onClick={showInputs} className="sign-up-button">Sign up with email</button>
    const [lowerPartOfForm, setlowerPartOfForm] = useState(lowerFormState)

    const linkLogIn = () => {
        dispatch(openModal('open', <Login />))
    }

    const submitLogin = async (e) => {
        e.preventDefault()
        const url = `${baseUrl}/users/signup`
        const data = {
            email: changeEmail,
            password: changePassword
        }

        const resp = await axios.post(url, data)
        const token = resp.data.token
        console.log(token)
        console.log(resp.data)

        // const url2 = `${baseUrl}/users/token-check`
        // const resp2 = await axios.post(url2, {token})
        // console.log(resp2.data)

        // resp.data.msg could be:
        // -invalidData
        // -userExists
        // -userAdded

        if(resp.data.msg === 'userExists'){
            swal({
                title: "Email Exists",
                text: "The email you provided is already registered. Please try another.",
                icon: "error",
              })
        }

        if(resp.data.msg === 'invalidData'){
            swal({
                title: "Invalid email/password",
                text: "Please provide a valid email and password",
                icon: "error",
              })
        }

        if(resp.data.msg === 'userAdded'){
            swal({
                title: "success",
                icon: "success",
              })

            //   here is where we call our register action to update our auth reducer
            dispatch(regAction(resp.data)) //sending out everything we got from the server, not just the token
        }
    }

    console.log(auth)

    return (
        <div className="login-form">
                <form onSubmit={submitLogin}>
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect With Google</button>
                    <div className="login-or center">
                        <span>or</span>
                        <div className="or-divider"></div>
                    </div>
                    {lowerPartOfForm}
                    <div className="divider"></div>
                    <div className='access'>Already have an account? <span onClick={linkLogIn}>Log in</span></div>
                </form>
            </div>
    )
}

const SignUpInputFields = ({ changeEmailInput, changePasswordInput, handleVisibility}) => {
    return(
        <div>
            <div className='col m12'>
                <div className='input-field' id='email'>
                    <div className='form-label'>Email</div>
                    <input type='email' className='browser-default' placeholder='Email' onChange={changeEmailInput} style={{width: '90%'}} />
                </div>
            </div>
            <div className='col m12'>
                <div className='input-field' id='email'>
                    <div className='form-label'>Password</div>
                    <div><input type='password' className='browser-default password' placeholder='Password' onChange={changePasswordInput} style={{width: '90%'}} />
                        <i onClick={handleVisibility} id='eye' className="fas fa-eye-slash"></i>
                    </div>
                </div>
            </div>
            <div className='col m12'>
                <button type='submit' id='submit' className='btn red accent-2' style={{width: '100%', fontWeight: '700'}}>Sign Up</button>
            </div>
        </div>
    )
}