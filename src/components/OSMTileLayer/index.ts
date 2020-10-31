import React, { useContext, useEffect } from 'react';
import { TileLayer } from 'leaflet';
import LeafletMapContext from '../LeafletMapContext';

const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const OSMTileLayer: React.FC = () => {
  const leafletMap = useContext(LeafletMapContext);

  useEffect(() => {
    const osm = new TileLayer(osmUrl, {
      attribution: osmAttribution
    });
    
    leafletMap?.addLayer(osm);

    return () => {
      leafletMap?.removeLayer(osm);
    }
  }, [leafletMap])

  return null;
};

export default OSMTileLayer;
