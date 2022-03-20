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

    const [name, setName] = useState('')
    const handleBtnClick = (value) => {
        setName(value)
    }

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
                                <button className="marker_button" onClick={() => handleBtnClick(place.properties.NAME)}>
                                    {place.properties.NAME === name ?  
                                        <img className="marker_Check" src="/sign-right.svg"/> : 
                                        <img className="marker_Total" src="/circle.png"/>
                                    }
                                </button>
                                

                            </Marker>
                        ))
                    }
                </ReactMapGL>
            </div>
        </>
    )

}

export default MapBox