import { LeafletMouseEvent } from 'leaflet';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import './Map.css';

type MapProps = {
  center?: CoordinatesTuple;
  onClick?: (coordinates: Coordinates) => void;
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type CoordinatesTuple = [number, number];

const defaultProps: MapProps = {
  center: [-33.448, -70.669],
  onClick: undefined,
};

function MapConsumer(props: MapProps): null {
  const { onClick } = props;

  useMapEvents({
    click: (e: LeafletMouseEvent): void => {
      const { lat, lng } = e.latlng;
      const coordinates: Coordinates = { latitude: lat, longitude: lng };
      onClick?.(coordinates);
    },
  });

  return null;
}

function Map(props: MapProps): JSX.Element {
  const { center, onClick } = props;

  return (
    <MapContainer id="map" center={center} zoom={4}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapConsumer onClick={onClick} />
    </MapContainer>
  );
}

Map.defaultProps = defaultProps;

export default Map;
