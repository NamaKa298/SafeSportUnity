import { Container } from "@/ui/components/container/container";
import { SocialNetworksButtons } from "@/ui/components/navigation/social-networks-buttons";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
import Link from "next/link";  // Importer Link de Next.js pour les liens internes

export interface FeaturesListInterface {
    imagePath: string;
    imageAlt: string;
    title: string;
    description: string;
    link: string;  // Ajout d'un lien pour chaque feature
}

const featuresData: FeaturesListInterface[] = [
    {
        imagePath: "/assets/images/icone_training.jpg",
        imageAlt: "icone training",
        title: "My Trainings",
        description: "Allows me to retrieve my current training and the past trainings completed",
        link: "/my_trainings",
    },
    {
        imagePath: "/assets/images/new_training.png",
        imageAlt: "icone new_training",
        title: "New Training",
        description: "Allows me to create a new personalized training",
        link: "/new_training",
    },
    {
        imagePath: "/assets/images/find_partners.png",
        imageAlt: "icone find my partners",
        title: "Find My Partners",
        description: "Allows me to geolocate potential training partners",
        link: "/find_partners",
    },
    {
        imagePath: "/assets/images/contact_details.png",
        imageAlt: "icone contact details",
        title: "Contact details",
        description: "Allows access to user data",
        link: "/details-du-contact",
    },
    {
        imagePath: "/assets/images/disconnect_icon.png",
        imageAlt: "icone disconnect",
        title: "Disconnect",
        description: "Allows the user to log out",
        link: "/mon-espace",
    },
    {
        imagePath: "/assets/images/subscription.png",
        imageAlt: "icone subscription",
        title: "Subscription Management",
        description: "Allows the user to manage their subscription or subscribe to a new one",
        link: "/subscription",
    },
];

export const FeaturedView = () => {
    const featuredList = featuresData.map((feature) => (
        <div
            key={uuidv4()} className="flex flex-col items-center justify-center bg-white rounded p-7"
        >
            {/* Lien autour de l'image uniquement */}
            <Link href={feature.link}>
                <div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 overflow-hidden transition-transform duration-300 hover:scale-95 cursor-pointer">
                    <Image
                        fill
                        src={feature.imagePath}
                        alt={feature.imageAlt}
                        className="object-scale-down"
                    />
                </div>
            </Link>

            {/* Titre et description restent non cliquables */}
            <Typography variant="lead" component="h3" weight="medium" className="text-center mb-2.5">
                {feature.title}
            </Typography>
            <Typography variant="body-base" component="p" theme="gray" className="text-center">
                {feature.description}
            </Typography>
        </div>
    ));

    return (
        <div className="bg-gray-300">
            <Container className="w-full grid grid-cols-12 gap-24 py-24">
                
                {/* Liste en vedette avec un peu moins d'espace (6 colonnes) */}
                <div className="grid grid-cols-3 col-span-12 gap-24">{featuredList}</div>
                
                {/* Icônes de réseaux sociaux en dessous */}
                <div className="flex flex-col items-center justify-center mt-auto col-span-12">
                    {/* Texte centré */}
                    <Typography variant="caption3" theme="gray" component="div" className="mb-4">
                        Follow us on social networks
                    </Typography>
                    
                    {/* Icônes centrées */}
                    <div className="flex justify-center">
                        <SocialNetworksButtons />
                    </div>
                </div>
            </Container>
        </div>
    );
};
