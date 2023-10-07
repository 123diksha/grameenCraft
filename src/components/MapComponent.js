import React, { useState } from 'react';
import mapboxgl from 'mapbox-gl';
import ReactMapGL, { Marker } from 'react-map-gl'; // Import Marker component

function MapComponent({ onLocationChange }) {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 10,
  });

  const handleMapClick = (event) => {
    const { lngLat } = event;
    setViewport({ ...viewport, latitude: lngLat[1], longitude: lngLat[0] });
    onLocationChange({ latitude: lngLat[1], longitude: lngLat[0] });
  };

  return (
    <div>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="300px"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(newViewport) => setViewport(newViewport)}
        onClick={handleMapClick}
      >
        <Marker
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <div>Marker</div>
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default MapComponent;
