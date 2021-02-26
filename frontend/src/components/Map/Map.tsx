import { LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

type MapProps = {
  name: string;
};

const defaultCenter: LatLngTuple = [-33.448, -70.669];

export default function Map(props: MapProps): JSX.Element {
  const { name } = props;

  return (
    <div
      id="map"
      style={{ width: '500px', height: '500px', border: '1px solid red' }}
    >
      <MapContainer
        center={defaultCenter}
        zoom={4}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={defaultCenter}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable. {name}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
