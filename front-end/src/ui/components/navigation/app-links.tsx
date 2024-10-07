import { AppLinks } from "@/types/app-links";

const footerLogoLinks: AppLinks[] = [
    {
        label: "COMPANY",
        baseUrl: "/",
        type: "internal",
    },
    {
        label: "How It Works",
        baseUrl: "/",
        type: "internal",
    },
];
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
        label: "SAFESPORTUNITY",
        links: footerLogoLinks,
    },
    {
        label: "RESSOURCES",
        links: footerRessourcesLinks,
    },
    {
        label: "ABOUT",
        links: footerAboutLinks,
    },
]