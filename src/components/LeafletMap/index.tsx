import React,  { useState, useEffect } from 'react';
import { Map, LatLng } from 'leaflet'
import LeafletMapContext from '../LeafletMapContext';
import { DEFAULT_MAP_ZOOM, DEFAULT_MAP_CENTER } from '../../constants';
import './Map.scss';

interface LeafletMapProps {
  children: React.ReactNode;
  zoom: number;
  center: {
    lat: number;
    long: number;
  }
}

const LeafletMap: React.FC = ({
  children,
  zoom = DEFAULT_MAP_ZOOM,
  center = DEFAULT_MAP_CENTER
}: LeafletMapProps) =>  {
  const [leafletMap, setLeafletMap] = useState(null as any);

  useEffect(() => {
    setLeafletMap(new Map('map', {
      center: new LatLng(center.lat, center.long),
      zoom
    }));

    return () => {
      setLeafletMap(null);
    }
  }, []);

  return (
    <LeafletMapContext.Provider value={leafletMap}>
      <div id='map'>
        {leafletMap && children}
      </div>
    </LeafletMapContext.Provider>
  );
};

export default LeafletMap;
