import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import LoadingSpinner from '../loader/basic-spinner/LoadSpinner';
import { center, libraries, mapContainerStyle } from './MapConst';

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_MAP_KEY}`,
    libraries,
  });

  let content = (
    <GoogleMap
      id="map"
      mapContainerStyle={mapContainerStyle}
      zoom={14}
      center={center}
    >
      <Marker
        key={`${center.lat - center.lng}`}
        position={{
          lat: center.lat,
          lng: center.lng,
        }}
      />
    </GoogleMap>
  );

  if (loadError) return 'Error loading map';
  if (!isLoaded) content = <LoadingSpinner />;

  return <>{content}</>;
};

export default Map;
