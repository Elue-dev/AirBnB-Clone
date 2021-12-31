import City from './City'
import './City.css'

export default function Cities({ cities, header }){

    const citiesList = cities.map(city => {
        return(
            <div key={city.id} className="city">
                <City city={city} />
            </div>
        )
    })

    return(
        <div className='main-container'>
            <h3 className="main-header-text wrapper">{header}</h3>
            <div className='cities-container'>
                <div className="cities-wrapper">
                    {citiesList}
                </div>
            </div>
        </div>
    )
}