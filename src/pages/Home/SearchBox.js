import React, { useState } from 'react'
import './SearchBox.css'

function SearchBox() {

    const [where, setWhere] = useState('')
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [guests, setGuests] = useState(0)

    const changeWhere = e => {
        setWhere(e.target.value)
    }

    const changeCheckIn = e => {
        setCheckIn(e.target.value)
    }

    const changeCheckOut = e => {
        setCheckOut(e.target.value)
    }

    const changeGuests = e => {
        if(guests < 0 ){
            setGuests(0)
        } else {
            setGuests(e.target.value)
        }
    }

        return (
            <div className='home-search-box col m4'>
                <h1>Book unique places to stay and things to do</h1>
                <div className='form'>
                    <form className='search-box-form'>
                        <div className='col m12'>
                            <div className='form-label'>Where</div>
                            <div className='input-field' id='where'>
                                <input 
                                 onChange={changeWhere}
                                 value={where}
                                 type='text'
                                 placeholder='Anywhere'
                                 className='browser-default'
                                />
                            </div>
                        </div>
                        <div className='col m6'>
                            <div className='form-label'>Check In</div>
                            <div className='input-field' id='check-in'>
                                <input 
                                 onChange={changeCheckIn}
                                 value={checkIn}
                                 type='date'
                                 className='browser-default'
                                />
                            </div>
                        </div>
                        <div className='col m6'>
                            <div className='form-label'>Check Out</div>
                            <div className='input-field' id='check-Out'>
                                <input 
                                 onChange={changeCheckOut}
                                 value={checkOut}
                                 type='date'
                                 className='browser-default'
                                />
                            </div>
                        </div>
                        <div className='col m12'>
                            <div className='form-label'>Guests</div>
                            <div className='input-field' id='guests'>
                                <input 
                                 onChange={changeGuests}
                                 value={guests}
                                 type='number'
                                 className='browser-default'
                                />
                            </div>
                        </div>
                        <div className='col m12 submit-btn'>
                            <div className='input-field' id='submit-btn'>
                                <input className='btn-large wave-effect wave-light red accent-2' type='submit' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
}

export default SearchBox
