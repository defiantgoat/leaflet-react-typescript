import React, { useContext } from 'react';
import LeafletMapContext from '../LeafletMapContext';

const TileLayer: React.FC = () => {

  const leafletMap = useContext(LeafletMapContext);
  console.log(leafletMap);

  return null;

};

export default TileLayer;
