import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography";

export const HeroTopView = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex === 5) {
                    return 1;
                } else {
                    return prevIndex + 1;
                }
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-screen m-0">
            {/* Carrousel avec une hauteur définie */}
            <div className="relative w-screen h-[410px] m-0 p-0">
                <div
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 ${currentIndex === 1 ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src="/assets/images/run1.webp"
                        alt="runner picture 1"
                        fill
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 ${currentIndex === 2 ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src="/assets/images/bike1.webp"
                        alt="cyclist picture 1"
                        fill
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 ${currentIndex === 3 ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src="/assets/images/run2.webp"
                        alt="runner picture 2"
                        fill
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 ${currentIndex === 4 ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src="/assets/images/bike2.webp"
                        alt="cyclist picture 2"
                        fill
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 ${currentIndex === 5 ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src="/assets/images/run3.webp"
                        alt="runner picture 3"
                        fill
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>

            <Container className="relative pt-4 overflow-hidden pb-4">
                <div className="w-full max-w-2xl space-y-5">
                    <Typography variant="h1" component="h1" className="max-w-lg">
                        Just Do It Safely with your Partners !
                    </Typography>
                </div>
            </Container>



        </div>
    );
};
