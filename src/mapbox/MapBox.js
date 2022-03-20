import './MapBox.css'
import React, {useState} from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import data from "../data/sanfrancisco.json"

function MapBox() {
    
    const [viewport, setViewport] = useState({
        latitude: 37.778259,
        longitude: -122.417931,
        width: '100vw',
        height: '100vh',
        zoom: 11,
    })

    // console.log(data)

    return ( 
        <>
            <div style={{ height:"700px"}}>
                <ReactMapGL
                    {...viewport}
                    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/californialuv/cl0ywdh8t000f14ocnrgsob9l"
                    onMove={newport => setViewport(newport)}
                >
                    {
                        data.features.map((place) => (
                            <Marker
                                key={place.properties.ID}
                                longitude={place.geometry.coordinates[0]}
                                latitude={place.geometry.coordinates[1]}
                            >

                            </Marker>
                        ))
                    }
                </ReactMapGL>
            </div>
        </>
    )

}

export default MapBox