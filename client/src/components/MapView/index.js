import React, { useState, useEffect } from 'react'
import MapPicker from 'react-google-map-picker'

//const DefaultLocation = { lat: 10, lng: 106 };
//const DefaultZoom = 10;

const MapView = (props) => {
    console.log(props)
    var lat = props.location[0]
    var lng = props.location[1]
    var location = { lat, lng }
    console.log(location)
    /*
    const [defaultLocation, setDefaultLocation] = useState(props);

    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);

    function handleChangeLocation(lat, lng) {
        setLocation({ lat: lat, lng: lng });
    }

    function handleChangeZoom(newZoom) {
        setZoom(newZoom);
    }

    function handleResetLocation() {
        setDefaultLocation({ ...DefaultLocation });
        setLocation({ ...DefaultLocation });
        setZoom(DefaultZoom);
    }
    */
    return (
        <MapPicker defaultLocation={location}
            zoom={10}
            mapTypeId="roadmap"
            style={{ height: '100%' }}
            //onChangeLocation={handleChangeLocation}
            //onChangeZoom={handleChangeZoom}
            zoomControl={false}
            scaleControl={false}
            fullscreenControl={false}
            disableDoubleClickZoom={true}
            disableStreetView={true}
            gestureHandling='greedy'
            draggable={true}
            apiKey={process.env.REACT_APP_MAPSKEY} />
    );
}

export default MapView