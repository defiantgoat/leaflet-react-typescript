import React from 'react';
import LeafletMap from '../LeafletMap';
import OSMTileLayer from '../OSMTileLayer';
import { config } from '../../config';
import './App.scss';

const App: React.FC = () =>  {

  return (
    <div className='app'>
        <LeafletMap
          zoom={config.mapZoom}
          center={config.mapCenter}
        >
          <OSMTileLayer />
        </LeafletMap>
    </div>
  );
};

export default App;
