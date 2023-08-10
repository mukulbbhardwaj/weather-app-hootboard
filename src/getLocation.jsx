import React, { useEffect, useState } from 'react'

const getLocation = () => {


    const [location, setLocation] = useState({
        loaded: false,
        coordiantes: { lat: "", long: "" }
    });

    const onSuccess = location => {
        setLocation({
            loaded: true,
            coordiantes: {
                lat: location.coords.latitude,
                long: location.coords.longitude,
            }
        })
    };
    const onError = error => {
        setLocation({
            loaded: true,
            error,
        })
    }
    useEffect(() => {
        if (!('geolocation' in navigator)) {
            onError({
                code: 0,
                message: "Geolocation Not Supported",
            });
           
            navigator.geolocation.getCurrentLocation(onSuccess, onError);
        }
    })
  return (
    <div>getLocation</div>
  )
}

export default getLocation