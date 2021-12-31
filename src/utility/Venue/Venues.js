import Venue from './Venue'
import './Venue.css'

export default function Venues({ venues, header }) {
    const venuesList = venues.map(venue => {
        return(
            <div key={venue.id} className="venues">
                <Venue venue={venue} />
            </div>
        )
    })
    return (
        <div className='main-container'>
        <h3 className="main-header-text v-header wrapper">{header}</h3>
        <div className='venues-container'>
            <div className="venues-wrapper">
                {/* <SlickSlider elements={citiesList} /> */}
                {venuesList}
            </div>
        </div>
    </div>
    )
}