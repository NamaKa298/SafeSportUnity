import { AppLinks } from "@/types/app-links";

const footerRessourcesLinks: AppLinks[] = [
    {
        label: "See All Ressources",
        baseUrl: "/",
        type: "internal",
    },
];

const footerAboutLinks: AppLinks[] = [
    {
        label: "Termes & Conditions",
        baseUrl: "/",
        type: "internal",
    },
    {
        label: "Privacy Policy",
        baseUrl: "/",
        type: "internal",
    },
];

export const footerLinks = [
    {
        label: "RESSOURCES",
        links: footerRessourcesLinks,
    },
    {
        label: "ABOUT",
        links: footerAboutLinks,
    },
]