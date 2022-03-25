import './MapBox.css'
import React, {useState, useCallback, useEffect} from 'react';
import ReactMapGL, { Layer, Marker, Popup, Source } from 'react-map-gl';
import data from "../data/sanfrancisco.geojson"
import Modal from '../components/Modal';
import {countiesLayer} from './map-style'


function MapBox() {
    
    const [hoverInfo, setHoverInfo] = useState(null);
    const [cursor, setCursor] = useState('')
    const [hidden, setHidden] = useState('hidden')

    const handleModal = (value) => {
        setHidden(value)
    }

    const onMouseLeave = useCallback(() => {
        setCursor('grab')
        setHoverInfo(false);
    }, []);
    
    const handleMove = (value) => {
        const placeName = value.features && value.features[0]
        setCursor('pointer')
        // console.log(placeName.properties)
        // value.features
        setHoverInfo({
            longitude: value.lngLat.lng,
            latitude: value.lngLat.lat,
            // countyName: county && county.properties.COUNTY
            countyName: placeName && placeName.properties.NAME
          });

          const markerid = value.features[0].id

          value.setFeatureState({
            source: 'states',
            id: markerid
          }, {
            hover: true
          })
    }

    // console.log(ReactMapGL)

    const selectedCounty = (hoverInfo && hoverInfo.countyName) || '';

   
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
                    onMouseLeave={onMouseLeave}
                    interactiveLayerIds={['sanfrancisco']}
                    cursor={cursor}
                    onMouseMove={handleMove}
                    onClick={() => handleModal('')}
                >  
                    <Source type="geojson" data={data}>
                      <Layer {...countiesLayer}/>
                    </Source>
                   
                   {selectedCounty && (
                       <Popup
                        longitude={hoverInfo.longitude}
                        latitude={hoverInfo.latitude}
                        anchor="bottom"
                        offset={[0, -10]}
                        closeButton={false}
                        closeOnClick={false}
                       >
                        {selectedCounty}
                       </Popup>
                   )}
                </ReactMapGL>
            </div>
            <Modal hidden={hidden} handleModal={handleModal}/>
        </>
    )

}

export default MapBox