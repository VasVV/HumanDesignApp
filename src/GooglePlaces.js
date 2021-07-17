import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useDispatch} from 'react-redux';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

const GooglePlaces = () => {

  const [value, setValue] = useState("");
  const [geoCodeCity, setGeoCodeCity] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'ADDUSERCITY', payload: geoCodeCity});
  })

  useEffect(() => {
    console.log(value)
    try {
    geocodeByAddress(value.label)
    .then(results => getLatLng(results[0]))
    .then(({ lat, lng }) =>{
      fetch(`http://api.geonames.org/extendedFindNearby?lat=${lat}&lng=${lng}&username=VasVV`)
      .then(response => response.text())
      .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
      .then(data => {
        let thisCity = data.getElementsByTagName('geonameId')[7].textContent;
        setGeoCodeCity(thisCity);
        console.log(thisCity);
      })
    }
    );
    } catch(err ) {
      console.log(err)
    }
    },[value])
  
    
  return (
    <div>
      <GooglePlacesAutocomplete
     apiKey="AIzaSyCN87TNsXwtIF-Doj8ODqf0gJI8vFQS1zY"                    
     autocompletionRequest={{ types: ['(cities)'] }}
    placeholder='Tu lugar de nacimiento'
     apiOptions={{ language: 'en'}}
     selectProps={{
        value,
        onChange: setValue,
      }}
      />
    </div>
  );
}


export default GooglePlaces;