import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MapPicker from 'react-google-map-picker'

const useStyles = makeStyles((theme) => ({
    Root: {
        boxSizing: 'border-box',
        height: '300px'
    },
    Row: {
        display: 'flex',
    },
    Column: {
        flex: '100%',
        padding: '10px',
        height: '250px'
    }
}));

const DefaultLocation = { lat: 10, lng: 106 };
const DefaultZoom = 10;

const MapView = () => {

    const classes = useStyles();
    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

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
        <div>
            <div>
                <button onClick={handleResetLocation}>Reset Location</button>
                <label>Latitute:</label><input type='text' value={location.lat} disabled />
                <label>Longitute:</label><input type='text' value={location.lng} disabled />
                <label>Zoom:</label><input type='text' value={zoom} disabled />
            </div>
            <div className={classes.Row}>
                <div className={classes.Column}>
                    <h4>Map 1 (roadmap)</h4>
                    <MapPicker defaultLocation={defaultLocation}
                        zoom={zoom}
                        mapTypeId="roadmap"
                        style={{ height: '100%' }}
                        onChangeLocation={handleChangeLocation}
                        onChangeZoom={handleChangeZoom}
                        apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8' />
                </div>
            </div>

        </div>
    );
}

export default MapView