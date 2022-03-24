import './MapBox.css'
import React, {useState, useCallback, useEffect} from 'react';
import ReactMapGL, { Layer, Marker, Popup, Source } from 'react-map-gl';
import data from "../data/sanfrancisco.geojson"
import {countiesLayer} from './map-style'


function MapBox() {
    
    const [hoverInfo, setHoverInfo] = useState(null);

    // console.log(data.features[0].layer.id)
    const [cursor, setCursor] = useState('')
    const [layer, setLayer] = useState(countiesLayer)

    
    const onMouseEnter = useCallback((value) => {
        setCursor('pointer')
        // console.log(value)
        // countiesLayer.paint['circle-radius'] = 10
    }, []);
    const onMouseLeave = useCallback(() => setCursor('grab'), []);
    

   
    return ( 
        <>
            <div style={{ height:"700px"}}>
                <ReactMapGL
                    initialViewState={{
                        latitude: 37.778259,
                        longitude: -122.417931,
                        width: '100vw',
                        height: '100vh',
                        zoom: 11,
                    }}
                    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/californialuv/cl0ywdh8t000f14ocnrgsob9l"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    interactiveLayerIds={['sanfrancisco']}
                    cursor={cursor}
                    mou
                    
                >  
                    <Source type="geojson" data={data}>
                      <Layer {...countiesLayer}/>
                    </Source>
                   
                </ReactMapGL>
            </div>
        </>
    )

}

export default MapBox