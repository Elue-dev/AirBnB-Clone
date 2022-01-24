import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../api'
import axios from 'axios';
import Spinner from '../../utility/Spinner/Spinner';
import Venues from '../../utility/Venue/Venues';
 
export default function CityVenues() {

    const [venues, setVenues] = useState([]);
    const [header, setHeader] = useState('');

    const params = useParams()
    const cityName = params.cityName
    const url = `${baseUrl}/venues/city/${cityName}`
    console.log(url);

     useEffect(() => {
        getData()
    },[])

    const getData = async () => {
        const resp = await axios(url, {cityName})
        setVenues(resp.data.venues)
        setHeader(resp.data.header)
    }

    if(!header){
        return <Spinner />
    }

  return <div>
      <Venues venues={venues} header={header} />
  </div>;
}

