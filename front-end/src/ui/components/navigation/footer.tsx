/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container } from "../container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { footerRessourcesLinks } from "./app-links";
import { v4 as uuidv4 } from 'uuid';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerNavigationList = footerRessourcesLinks.map((element) =>
        <div key={uuidv4()}> {element.label}</div >
    );

    return (
        <div className="bg-gray">
            <Container className="flex justify-between pt-16">
                <div className="flex flex-col items-center gap-2">
                    <Typography
                        variant="caption1"
                        theme="white"
                        weight="medium"
                    >
                        SafeSportUnity
                    </Typography>
                    <Typography
                        variant="caption1"
                        theme="white"
                        weight="medium"
                    >
                        COMPANY
                    </Typography>
                    <Typography
                        variant="caption1"
                        theme="white"
                        weight="medium"
                    >
                        How It Works
                    </Typography>
                </div>
                <div className="">{footerNavigationList}</div>
            </Container>
            <Container className="pt-9 pb-11 space-y-11">
                <hr className="text-gray-800" />
                <div className="flex items-center justify-between">
                    <Typography variant="caption4" theme="gray" >
                        {`Copyright © ${currentYear} | By Benoît Beti & Marion Saint-Martin - SafeSportUnity`}
                    </Typography>
                    <div className="">

                    </div>
                    <div className="">

                    </div>
                </div>
            </Container>
        </div>
    );
}

const FooterLink = () => {
    return (
        <div className="min-w-[190px]">
            <Typography
                theme="white"
                variant="caption2"
                weight="medium"
                className="pb-5"
            >
                Titre
            </Typography>
            <Typography theme="gray" variant="caption3" className="space-y-4" >
                <div>Link 1</div>
                <div>Link 2</div>
                <div>Link 3</div>
                <div>Link 4</div>
            </Typography>
        </div>
    );
}