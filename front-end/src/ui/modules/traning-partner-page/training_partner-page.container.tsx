import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'; // Import de l'icône par défaut
import dynamic from 'next/dynamic';
import 'leaflet-defaulticon-compatibility'; // Répare les icônes par défaut pour Leaflet
import { useEffect, useState } from 'react';
import { LatLngExpression } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
// const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
// const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });


export const MapComponent: React.FC = () => {
    const [position, setPosition] = useState<LatLngExpression>({ lat: 48.8566, lng: 2.3522 }); // Paris par défaut

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    setPosition([latitude, longitude]);
                },
                (err) => {
                    console.error("Erreur de géolocalisation : ", err);
                }
            );
        } else {
            console.error("La géolocalisation n'est pas supportée par ce navigateur.");
        }
    }, []);


    return (
        <MapContainer center={position} zoom={13} style={{ height: "300px", width: "300px" }}>
            {/* Ajout des tuiles OpenStreetMap */}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Marqueur à la position actuelle */}
            <Marker position={position}>
                <Popup>Vous êtes ici</Popup>
            </Marker>
        </MapContainer>
    );
}

