import React, { Component } from 'react';
import './Home.css';
import SearchBox from './SearchBox';
import Spinner from '../../utility/Spinner/Spinner';
import axios from 'axios';
import Cities from '../../utility/City/Cities';
import Activities from '../../utility/Activity/Activities';
import Venues from '../../utility/Venue/Venues';
import { baseUrl } from '../../api';

class Home extends Component{

    state = {
        cities: [],
        europeCities: {},
        asiaCities: {},
        exoticCities: {},
        activities: [],
        recVenues: {}
    }

    async componentDidMount(){
        const citiesUrl = `${baseUrl}/cities/recommended`;
        const europeCitiesUrl = `${baseUrl}/cities/europe`;
        const asiaCitiesUrl = `${baseUrl}/cities/asia`;
        const exoticCitiesUrl = `${baseUrl}/cities/exotic`;

        const citiesPromises = [];

        citiesPromises.push(axios.get(citiesUrl));
        citiesPromises.push(axios.get(europeCitiesUrl));
        citiesPromises.push(axios.get(asiaCitiesUrl));
        citiesPromises.push(axios.get(exoticCitiesUrl));

        Promise.all(citiesPromises).then((data)=>{
            const recommendedCities = data[0].data;
            const europeCities = data[1].data;
            const asiaCities = data[2].data;
            const exoticCities = data[3].data;

            this.setState({
                cities: recommendedCities,
                europeCities,
                asiaCities,
                exoticCities,
            });
        })


        const activitiesUrl = `${baseUrl}/activities/today`;
        const activities = await axios(activitiesUrl);
        this.setState({
            activities: activities.data,
        });

        const recVenuesUrl = `${baseUrl}/venues/recommended`;
        const venues = await axios(recVenuesUrl);
        this.setState({
            recVenues: venues.data,
        })
    }

    render(){
        if((this.state.cities.length === 0) || (!this.state.recVenues.venues)){
            return(<Spinner />)
        }

        return(<>
            <div className="container-fluid">
                <div className="row">
                    <div className="home col s12">
                        <div className="upper-fold">
                            <SearchBox history={this.props.history} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                        <Activities activities={this.state.activities} header="Today in your area" />
                        <Cities cities={this.state.cities} header="Recommended Cities For You" />
                        <Cities cities={this.state.europeCities.cities} header={this.state.europeCities.header} />
                        <Venues venues={this.state.recVenues.venues} header={this.state.recVenues.header} />
                        <Cities cities={this.state.asiaCities.cities} header={this.state.asiaCities.header} />
                        <Cities cities={this.state.exoticCities.cities} header={this.state.exoticCities.header} />
                </div>
        </>
        )
    }
}

export default Home;
