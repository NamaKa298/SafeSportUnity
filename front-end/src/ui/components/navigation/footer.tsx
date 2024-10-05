import { Container } from "../container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { footerRessourcesLinks } from "./app-links";

export const Footer = () => {

    const currentYear = new Date().getFullYear();

    const footerNavigationList = footerRessourcesLinks.map((element) => {
        console.log(element);
    });

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
                {/*<div className="">{footerNavigationList}</div>*/}
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