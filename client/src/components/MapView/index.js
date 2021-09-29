import React, { useState, useEffect } from 'react'
import MapPicker from 'react-google-map-picker'

const DefaultLocation = { lat: 10, lng: 106 };
const DefaultZoom = 10;

const MapView = (props) => {
    console.log(props)

    useEffect( () => {
        console.log('props updated.')
        var x = props
        console.log(props.lat, props.lng)
        console.log(location)
        console.log(x)
        setLocation(x)
    }, [props.lng])

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

    return (
        <MapPicker defaultLocation={defaultLocation}
            zoom={zoom}
            mapTypeId="roadmap"
            style={{ height: '100%' }}
            onChangeLocation={handleChangeLocation}
            onChangeZoom={handleChangeZoom}
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