import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { useEffect, useRef } from "react";
import { MapContainer } from "./Map.styles";

export const Map = (): JSX.Element => {
  /* ######################################## */
  /* State */
  /* ######################################## */
  const mapNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = mapNode.current;

    /* If the dom node is not initialized, then return early */
    if (typeof window === "undefined" || node === null) {
      return;
    }

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken:
        "pk.eyJ1IjoibGFtYnRzYSIsImEiOiJjbGNzdmY2cXEwajRiM29wMWJhZ283Nm1pIn0.awIT6WY3uOm0LKflyi4EQA",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [7.144527186802712, 48.42183154224175],
      zoom: 15,
      minZoom: 7,
      maxZoom: 15,
    });

    new mapboxgl.Marker()
      .setLngLat([7.144311186802712, 48.42170154224175])
      .addTo(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return <MapContainer ref={mapNode} />;
};
