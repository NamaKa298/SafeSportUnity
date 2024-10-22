import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'; // Import de l'icône par défaut
import dynamic from 'next/dynamic';
import 'leaflet-defaulticon-compatibility'; // Répare les icônes par défaut pour Leaflet
import { useEffect, useState } from 'react';
import { LatLngExpression } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { collection, getDocs } from 'firebase/firestore';
import { useToggle } from '@/hooks/use-toggle';
import { TrainingPartnersFormFieldsType } from '@/types/forms';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TrainingPartnersView } from './training-partner.view';
import { db } from '@/config/firebase-config';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });

export const MapComponent: React.FC = () => {
    const [position, setPosition] = useState<LatLngExpression>({ lat: 48.8566, lng: 2.3522 }); // Paris par défaut
    const [partners, setPartners] = useState([]);

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

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "users_partners"));
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


    const handleCreateUserPartners = async ({
        address,
        latitude,
        longitude,
        level,
        training_type,
    }: TrainingPartnersFormFieldsType) => {


        const userDocumentData = {
            address: address,
            latitude: latitude,
            longitude: longitude,
            level: level,
            training_type: training_type,
            uid: data.uid,
            creation_date: new Date(),
        }
        handleCreateUserPartners("users_partners", data.uid, userDocumentData);
    }
    const onSubmit: SubmitHandler<TrainingPartnersFormFieldsType> = async (formData) => {
        setIsLoading(true);

        handleCreateUserPartners(formData);
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