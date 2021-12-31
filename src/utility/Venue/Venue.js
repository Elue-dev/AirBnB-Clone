import { Link } from 'react-router-dom'
import './Venue.css'

export default function Venue({ venue }) {

    const { title, imageUrl, location, pricePerNight, rating, id } = venue

    return (
        <Link to={`/venue/${id}`}>
            <div className='venues-wrapperr'>
                <div className='image'>
                    <img src={imageUrl} alt={title} />
                </div>
                <div className='venue-name'><b>&rarr; {location}</b></div>
                <div className='title'>{title}</div>
                <div className='rating'>
                    <i className='material-icons'>star</i> {rating} rating
                </div>
                <div className='price'>${pricePerNight}/night</div>
            </div>
        </Link>
    )
}
