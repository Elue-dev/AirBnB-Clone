import React, { useEffect } from 'react'
import './PaymentSuccess.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
library.add(faLongArrowAltRight);


const PaymentSuccess = () => {

    const auth = useSelector(state => state.auth)

    const params = useParams()

    useEffect(() => {
        const stripeToken = params.stripeToken
        const token = auth.token
        const data = {stripeToken, token}
        console.log(data);
    },[])

    return(
        <div className='reservation-success row'>
            <h1 className='col m12 center'>Start Packing!</h1>
            <div className='resv-details col s8 offset-s2'>
                <div className='confirmed col m12 row'>
                    <FontAwesomeIcon icon='long-arrow-alt-right' size='1x' color='#ED0000' />Confirmed:
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccess