/* eslint-disable */
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';


export interface FeaturesListInterface {
    imagePath: string;
    imageAlt: string;
    title: string;
    description: string;
}
const featuresData: FeaturesListInterface[] = [
    {
        imagePath:"/assets/images/icone_training.jpg",
        imageAlt:"icone training",
        title:"My Trainings",
        description:"Allows me to retrieve my current training and the past trainings completed",
    },
    {
        imagePath:"/assets/images/new_training.png",
        imageAlt:"icone new_training",
        title:"New Training",
        description:"Allows me to create a new personalized training",
    },
    {
        imagePath:"/assets/images/find_partners.png",
        imageAlt:"icone find my partners",
        title:"Find My Partners",
        description:"Allows me to geolocate potential training partners",
    },
    {
        imagePath:"/assets/images/contact_details.png",
        imageAlt:"icone contact details",
        title:"Contact details",
        description:"Allows access to user data",
    },
    {
        imagePath:"/assets/images/disconnect_icon.png",
        imageAlt:"icone disconnect",
        title:"Disconnect",
        description:"Allows the user to log out",
    },
    {
        imagePath:"/assets/images/subscription.jpg",
        imageAlt:"icone subscription",
        title:"Subscription Management",
        description:"Allows the user to manage their subscription or subscribe to a new one",
    },
]

export const FeaturedView = () => {

    const featuredList = featuresData.map((feature) => (
        <div key={uuidv4()} className="flex flex-col items-center justify-center bg-white rounded p-7">
            <div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 bg-gray-400">
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
        <Container className="grid grid-cols-12 gap-24 py-24">
            <div className="grid grid-cols-2 col-span-7 gap-7">{featuredList}</div>
            <div className="col-span-5"></div>
        </Container>
        </div>
    );
};