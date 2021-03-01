import { LeafletMouseEvent } from 'leaflet';

export type MapProps = {
  onClick?: (e: LeafletMouseEvent) => void;
};
