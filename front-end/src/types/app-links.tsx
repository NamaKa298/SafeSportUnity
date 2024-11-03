import { LinkType } from "@/lib/link-type";
import { IconType } from "react-icons";

export interface LogoLinks {
    label: string;
    links: AppLinks[];
}

export interface AppLinks {
    label: string;
    baseUrl: string;
    type: LinkType;
    icon?: IconType;
    link?: string;
}
 
export interface FooterLinks {
    label: string;
    links: AppLinks[];
}