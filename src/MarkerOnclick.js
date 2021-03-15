/* eslint-disable react/prop-types */
import { useMapEvents } from "react-leaflet";
import React from 'react';

export function AddMarkerToClick({ onMapClick }) {
  useMapEvents({
    click(e) {
      //   onMapClick(e.latlng);
    },
    contextmenu(e) {
      onMapClick(e.latlng);
    },
  });

  return <></>;
}
