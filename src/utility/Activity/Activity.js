import { Link } from 'react-router-dom'
import './Activity.css'

export default function Activity({ activity }) {

    const { activityType, title, image, rating, cost, totalRatings, id } = activity

    return (
        <Link to={`/activity/${id}`}>
            <div className='activities-wrapperr'>
                <div className='image'>
                    <img src={image} alt={activityType} />
                </div>
                <div className='activity-name'><b>&rarr; {activityType}</b></div>
                <div className='price'>{title}</div>
                <div className='title'>From ${cost}/person</div>
                <div className='rating'>
                    <i className='material-icons'>star</i>{rating} <span>({totalRatings} reviews)</span>
                </div>
            </div>
        </Link>
    )
}
