import { LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import './Map.css';

const defaultCenter: LatLngTuple = [-33.448, -70.669];

function MapConsumer(): JSX.Element | null {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      console.log('Your location:', lat, lng);
    },
  });

  return null;
}

export default function Map(): JSX.Element {
  return (
    <MapContainer id="map" center={defaultCenter} zoom={4}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapConsumer />
    </MapContainer>
  );
}
