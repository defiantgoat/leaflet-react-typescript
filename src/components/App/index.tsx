import React from 'react';
import LeafletMap from '../LeafletMap';
import TileLayer from '../TileLayer';
import './App.scss';

const App: React.FC = () =>  {

  return (
    <div className='app'>
        <LeafletMap>
          <TileLayer />
        </LeafletMap>
    </div>
  );
};

export default App;
