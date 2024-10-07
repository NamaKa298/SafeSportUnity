import { LinkType } from "@/lib/link-type";

export interface LogoLinks {
    label: string;
    links: AppLinks[];
}

export interface AppLinks {
    label: string;
    baseUrl: string;
    type: LinkType;
}
 
export interface FooterLinks {
    label: string;
    links: AppLinks[];
}