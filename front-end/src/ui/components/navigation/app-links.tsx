import { AppLinks } from "next/dist/lib/metadata/types/extra-types";

export const footerRessourcesLinks: AppLinks[] = [
    {
        label: "See All Ressources",
        baseUrl: "/",
        type: "internal",
    },
];

export const footerAboutLinks: AppLinks[] = [
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