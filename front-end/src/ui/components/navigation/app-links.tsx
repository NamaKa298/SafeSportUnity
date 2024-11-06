/* eslint-disable */

import { AppLinks } from "@/types/app-links";
import { RiInstagramFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";
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
        label: "About Us",
        baseUrl: "/landing_page",
        type: "internal",
    },
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

export const footerSocialNetworksLinks: AppLinks[] = [
    {
        label: "Twitter",
        baseUrl: "https://x.com/Accueil",
        type: "external",
        icon: RiTwitterFill,
    },
    {
        label: "LinkedIn",
        baseUrl: "https://fr.linkedin.com/",
        type: "external",
        icon: RiLinkedinFill,
    },
    {
        label: "Instagram",
        baseUrl: "https://www.instagram.com/",
        type: "external",
        icon: RiInstagramFill,
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