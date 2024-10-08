import { useEffect, useState } from "react"
import { Container } from "@/ui/components/container/container"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

export const HeroTopView = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        console.log('HeroTopView')
    })

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
    <Carousel className="w-screen m-0 border">
        <CarouselContent className="w-screen m-0 p-0">
            <CarouselItem key={1} className={currentIndex === 1 ? 'block' : 'hidden'}>
                <Image
                    src="/assets/images/run1.webp"
                    alt="runner picture 1"
                    width={1920}
                    height={1192}
                    className="w-full h-[300px] object-cover"
                />
            </CarouselItem>
            <CarouselItem key={2} className={currentIndex === 2 ? 'block' : 'hidden'}>
                <Image
                    src="/assets/images/bike1.webp"
                    alt="cyclist picture 1"
                    width={1920}
                    height={1192}
                    className="w-full h-[300px] object-cover"
                />
            </CarouselItem>
            <CarouselItem key={3} className={currentIndex === 3 ? 'block' : 'hidden'}>
                <Image
                    src="/assets/images/run2.webp"
                    alt="runner picture 2"
                    width={1920}
                    height={1192}
                    className="w-full h-[300px] object-cover"
                />
            </CarouselItem>
            <CarouselItem key={4} className={currentIndex === 4 ? 'block' : 'hidden'}>
                <Image
                    src="/assets/images/bike2.webp"
                    alt="cyclist picture 2"
                    width={1920}
                    height={1192}
                    className="w-full h-[300px] object-cover"
                />
            </CarouselItem>
            <CarouselItem key={5} className={currentIndex === 5 ? 'block' : 'hidden'}>
                <Image
                    src="/assets/images/run3.webp"
                    alt="runner picture 3"
                    width={1920}
                    height={1192}
                    className="w-full h-[300px] object-cover"
                />
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>





    )
}