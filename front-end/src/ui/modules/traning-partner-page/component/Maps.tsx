import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet/hooks';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const Map = () => {

    const [coords, setCoords] = useState([43.6000611, 1.4434283]);

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

    return (
        <MapContainer center={coords} zoom={25} style={{ height: "400px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={coords}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            <RecenterAutomatically lat={coords[0]} lng={coords[1]} />
        </MapContainer>
    );
};

export default Map;