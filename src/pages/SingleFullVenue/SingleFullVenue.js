import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../api'
import './SingleFullVenue.css'
import Spinner from '../../utility/Spinner/Spinner';
import Point from './Point';

export default function SingleFullVenue() {

    const [singleVenue, setSingleVenue] = useState({})
    const [points, setPoints] = useState([])
    const [checkIn, setcheckIn] = useState('')
    const [checkOut, setcheckOut] = useState('')
    const [numberOfGuests, setnumberOfGuests] = useState(0)

    const params = useParams()

    useEffect(() => {
        singleVenueData()
    },[])

    const venueId = params.vId
    const singleVenueurl = `${baseUrl}/venue/${venueId}`
    const singleVenueData = async () => {
        const venuesResponse = await fetch(singleVenueurl)
        const venue = await venuesResponse.json()

        const pointsUrl = `${baseUrl}/points/get`
        const pointsResponse = await fetch(pointsUrl)
        const pointsData = await pointsResponse.json()

        const points = venue.points.split(',').map((point, i) => {
            return <Point pointDesc={pointsData} point={point} key={i} />
        })

        setSingleVenue(venue)
        setPoints(points)
    }

    const changeCheckIn = e => {
        setcheckIn(e.target.value)
    }

    const changeCheckOut = e => {
        setcheckOut(e.target.value)
    }

    const changeNumberOfGuests = e => {
        setnumberOfGuests(e.target.value)
    }

    const reserveNow = () => {
        alert('Reserved')
    }

    if(singleVenue.title === undefined){
        return <Spinner />
    }

    return (
        <div className='sv-wrapper'>
            <h3>{singleVenue.location}</h3>
            <div>
                <img src={singleVenue.imageUrl} alt={`${singleVenue.location} image`} />
            </div>
            <div className='venue-grid'>
                <div className='venue-details'>
                    <h2 className='venue-title'>{singleVenue.title}</h2>
                    <p className='venue-guests'><b>Guests:</b> {singleVenue.guests}</p>
                    <div className='divider'></div>
                    {points}
                    <p><b>Details:</b> {singleVenue.details}</p>
                </div>

                <div className='right-wrapper'>
                <div className='right-details col s4'>
                    <div className='price-per-day'>${singleVenue.pricePerNight} <span>per day</span></div>
                    <div className='rating'>
                        <i className='material-icons'>star</i> 
                        {singleVenue.rating} rating
                    </div>
                    <form className='venues-form'>
                        <div className='col s6'>
                            <b>Check-in</b>
                            <input type='date' onChange={changeCheckIn} value={checkIn}/>
                        </div>
                        <div className='col s6'>
                            <b>Check-out</b>
                            <input type='date' onChange={changeCheckOut} value={checkOut} />
                        </div>
                    </form>

                    <div className='col s12 select'>
                        <select onChange={changeNumberOfGuests} value={numberOfGuests} className='browser-default'>
                            <option value='1'>1 Guest</option>
                            <option value='2'>2 Guests</option>
                            <option value='3'>3 Guests</option>
                            <option value='4'>4 Guests</option>
                            <option value='5'>5 Guests</option>
                            <option value='6'>6 Guests</option>
                            <option value='7'>7 Guests</option>
                            <option value='8'>8 Guests</option>
                        </select>
                    </div>

                    <div className='col s12 center'>
                        <button onClick={reserveNow} className='btn red accent-2'>Reserve</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
