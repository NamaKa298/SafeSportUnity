import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { LatLngExpression } from 'leaflet';
import { collection, getDocs } from 'firebase/firestore';
import { useToggle } from '@/hooks/use-toggle';
import { TrainingPartnersFormFieldsType } from '@/types/forms';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TrainingPartnersView } from './training-partner.view';
import { db } from '@/config/firebase-config';
import { UserProfile } from '@/hooks/user'


if (typeof window !== 'undefined') {
    // Ces imports nécessitent l'objet `window`
    import('leaflet/dist/leaflet.css');
    import('leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css');
    import('leaflet-defaulticon-compatibility');
}


const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

export const MapComponent: React.FC = () => {
    const [position, setPosition] = useState<LatLngExpression>({ lat: 48.8566, lng: 2.3522 }); // Paris par défaut
    const [partners, setPartners] = useState<UserProfile[]>([]);
    const mapRef = useRef<any>(null);

    useEffect(() => {
        let watchId: number;
        if (typeof window !== 'undefined' && navigator.geolocation) {
            watchId = navigator.geolocation.watchPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    const newPosition: LatLngExpression = [latitude, longitude];
                    setPosition(newPosition);

                    // Recentrer la carte
                    if (mapRef.current) {
                        mapRef.current.setView(newPosition, 13);
                    }
                    console.log("Position obtenue:", newPosition);
                },
                (err) => {
                    console.error("Erreur de géolocalisation : ", err);
                },
                { enableHighAccuracy: true, timeout: 60000, maximumAge: 0 }
            );
        } else {
            console.error("La géolocalisation n'est pas supportée par ce navigateur.");
        }

        return () => {
            if (typeof window !== 'undefined') {
                navigator.geolocation.clearWatch(watchId);
            }
        };
    }, []);

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "users"));
                const partnersList = querySnapshot.docs.map(doc => doc.data());
                setPartners(partnersList);
            } catch (error) {
                console.error("Error fetching partners: ", error);
            }
        };
        fetchPartners();
    }, []);

    return (
        <MapContainer center={position} zoom={13} style={{ height: "400px", width: "400px" }}>
            {/* Ajout des tuiles OpenStreetMap */}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Marqueur à la position actuelle */}
            <Marker position={position}>
                <Popup>Vous êtes ici</Popup>
            </Marker>
            {/* Afficher les partenaires sur la carte */}
            {partners.map((partner, index) => (
                <Marker key={index} position={[partner.latitude, partner.longitude]}>
                    <Popup>
                        {partner.training_type} - Niveau: {partner.level}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export const TrainingPartnersContainer = () => {
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
    } = useForm<TrainingPartnersFormFieldsType>();



    const onSubmit: SubmitHandler<TrainingPartnersFormFieldsType> = async (formData) => {
        setIsLoading(true);
        const { training_type, level, latitude, longitude } = formData;
        setIsLoading(false);
    };


    return (
        <TrainingPartnersView
            form={{
                errors,
                control,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
            }}
        />
    );
};