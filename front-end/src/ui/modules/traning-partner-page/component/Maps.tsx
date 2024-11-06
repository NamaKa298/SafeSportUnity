/* eslint-disable */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet/hooks';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});
// @ts-ignore
const Map = ({markers, setMarkers}) => {

    const [coords, setCoords] = useState([43.6000611, 1.4434283]);
    // @ts-ignore
    const RecenterAutomatically = ({lat,lng}) => {
        const map = useMap();
        useEffect(() => {
            map.setView([lat, lng], 15);
        }, [lat, lng]);
        return null;
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);

            setCoords([position.coords.latitude, position.coords.longitude]);
        });
    }, []);

    useEffect(() => {
        console.log("Markers updated: ", markers);
    }, [markers]);

    return (
        <div className='relative z-0'>
        <MapContainer
        // @ts-ignore
         center={coords} zoom={25} style={{ height: "400px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
            // @ts-ignore
            position={coords}>
                <Popup>
                    You are here
                </Popup>
            </Marker>
            {markers.map(
                // @ts-ignore
                (marker, index) => (
                <Marker key={index} position={marker.coordinates}>
                    <Popup>
                        <div>
                            <p>{marker.address}</p>
                            <p>{marker.type}</p>
                            <p>{marker.date}</p>
                            <p>{marker.hour}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}


            <RecenterAutomatically lat={coords[0]} lng={coords[1]} />
        </MapContainer>
        </div>
    );
};

export default Map;