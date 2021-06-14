import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useDispatch} from 'react-redux';


const GooglePlaces = () => {

  const [value, setValue] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'ADDUSERCITY', payload: {...value}});
  })
    
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