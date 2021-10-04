import React from 'react'
import MapPicker from 'react-google-map-picker'

const MapView = (props) => {
    console.log(props)
    var lat = props.location[0]
    var lng = props.location[1]
    var location = { lat, lng }
   
    return (
        <MapPicker defaultLocation={location}
            zoom={10}
            mapTypeId="roadmap"
            style={{ height: '100%' }}
            disableDoubleClickZoom={true}
            gestureHandling='greedy'
            draggable={true}
            disableDefaultUI={true}
            apiKey={process.env.REACT_APP_MAPSKEY} />
    );
}

export default MapView