import { LatLngTuple, LeafletMouseEvent } from 'leaflet';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { MapProps } from './Map.types';
import './Map.css';

const defaultCenter: LatLngTuple = [-33.448, -70.669];

function MapConsumer(props: MapProps): null {
  const { onClick } = props;

  useMapEvents({
    click: (e: LeafletMouseEvent): void => onClick?.(e),
  });

  return null;
}

export default function Map(props: MapProps): JSX.Element {
  const { onClick } = props;

  return (
    <MapContainer id="map" center={defaultCenter} zoom={4}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapConsumer onClick={onClick} />
    </MapContainer>
  );
}
