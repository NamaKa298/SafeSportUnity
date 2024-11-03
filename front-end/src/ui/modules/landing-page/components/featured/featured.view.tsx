/* eslint-disable */
import { Container } from "@/ui/components/container/container";
import { SocialNetworksButtons } from "@/ui/components/navigation/social-networks-buttons";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';


export interface FeaturesListInterface {
    imagePath: string;
    imageAlt: string;
    title: string;
    description: string;
}
const featuresData: FeaturesListInterface[] = [
    {
        imagePath: "/assets/images/icone_training.jpg",
        imageAlt: "icone training",
        title: "My Trainings",
        description: "Allows me to retrieve my current training and the past trainings completed",
    },
    {
        imagePath: "/assets/images/new_training.png",
        imageAlt: "icone new_training",
        title: "New Training",
        description: "Allows me to create a new personalized training",
    },
    {
        imagePath: "/assets/images/find_partners.png",
        imageAlt: "icone find my partners",
        title: "Find My Partners",
        description: "Allows me to geolocate potential training partners",
    },
    {
        imagePath: "/assets/images/contact_details.png",
        imageAlt: "icone contact details",
        title: "Contact details",
        description: "Allows access to user data",
    },
    {
        imagePath: "/assets/images/disconnect_icon.png",
        imageAlt: "icone disconnect",
        title: "Disconnect",
        description: "Allows the user to log out",
    },
    {
        imagePath: "/assets/images/subscription.png",
        imageAlt: "icone subscription",
        title: "Subscription Management",
        description: "Allows the user to manage their subscription or subscribe to a new one",
    },
]

export const FeaturedView = () => {

    const featuredList = featuresData.map((feature) => (
        <div
            key={uuidv4()} className="flex flex-col items-center justify-center bg-white rounded p-7"
        >
            <div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 overflow-hidden">
                <Image
                    fill
                    src={feature.imagePath}
                    alt={feature.imageAlt}
                    className="object-scale-down blur-2xl"
                />
                <Image
                    fill
                    src={feature.imagePath}
                    alt={feature.imageAlt}
                    className="object-scale-down"
                />
            </div>
            <Typography variant="lead" component="h3" weight="medium" className="text-center mb-2.5">
                {feature.title}
            </Typography>
            <Typography variant="body-base" component="p" theme="gray" className="text-center">
                {feature.description}
            </Typography>
        </div>
    ))

    return (
        <div className="bg-gray-300">
            <Container className="w-full grid grid-cols-12 gap-24 py-24">
                {/* Liste en vedette avec un peu moins d'espace (6 colonnes) */}
                <div className="grid grid-cols-2 col-span-6 gap-7">{featuredList}</div>

                {/* Section texte à droite avec plus de place (6 colonnes) */}
                <div className="flex flex-col justify-between col-span-6 gap-10">
                    {/* Texte et bouton */}
                    <div>
                        <Typography variant="h1" component="h2" className="mb-5">
                            They did it, and they're telling you all about it!
                        </Typography>
                        <Typography variant="body-lg" theme="gray" component="p" className="mb-8">
                            There's only one thing left for you to do! Sign up and lace up your running shoes!
                        </Typography>
                        <Button
                            variant="secondary"
                            baseUrl="/connexion"
                            icon={{ icon: RiArrowRightLine }}
                            iconPosition="right"
                        >
                            Login
                        </Button>
                    </div>

                    {/* Icônes de réseaux sociaux en dessous */}
                    <div className="mt-auto">
                        <Typography variant="caption3" theme="gray" component="div" className="mb-4">
                            Follow us on social networks
                        </Typography>
                        <SocialNetworksButtons />
                    </div>
                </div>
            </Container>
        </div>

    );
};