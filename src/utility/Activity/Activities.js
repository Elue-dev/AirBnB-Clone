import Activity from './Activity'
import './Activity.css'

export default function Activities({ activities, header }) {

    const activitiesList = activities.map(activity => {
        return(
            <div key={activity.id} className="activity">
                <Activity activity={activity} />
            </div>
        )
    })
    return (
        <div className='main-container'>
        <h3 className="main-header-text wrapper">{header}</h3>
        <div className='activities-container'>
            <div className="activities-wrapper">
                {activitiesList}
            </div>
        </div>
    </div>
    )
}
