import { Typography } from "@/ui/design-system/typography";
import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import Image from "next/image";

export const TheyMadeItPageView = () => {
    return (
        <Container className="gap-20 mb-32 pt-32">
            <div className="flex flex-col items-center">
                <div className=" justify-between">
                    <Typography variant="h1" component="h1">
                        They Made It !
                    </Typography>
                    <div className="mt-10 mb-10 flex items-center w-full">
                        <Image
                            width={150}
                            height={150}
                            src="/assets/images/jakob.jpg"
                            alt="RunnerRookie20"
                            className="rounded-full"
                        />
                        <div className="ml-4 flex-1">
                            <div className="text-2xl font-bold mb-2">RunnerRookie20</div>
                            <Box className="w-full text-justify">
                                "I joined the training sessions last month, and I’m amazed by how much I've improved my running time! The coaches are incredibly supportive and provide personalized tips. The community aspect is fantastic ; I've met so many people who share the same passion for fitness, and we often motivate each other during our runs. I feel more confident and excited to keep pushing my limits!"
                            </Box>
                        </div>
                    </div>
                    <div className="mt-10 mb-10 flex items-center w-full">
                        <Image
                            width={150}
                            height={150}
                            src="/assets/images/eric-ward.jpg"
                            alt="CyclingPro45"
                            className="rounded-full"
                        />
                        <div className="ml-4 flex-1">
                            <div className="text-2xl font-bold mb-2">CyclingPro45</div>
                            <Box className="w-full text-justify">
                                "I've been cycling for over 20 years, but with a full-time job, it's harder than ever to maintain my training routine. This app has made a huge difference! It creates personalized training sessions based on my schedule and fitness level. The group training feature is a bonus—being able to join local cyclists has kept me motivated, and I've even made new friends along the way. The app's data tracking is spot on too, helping me monitor my progress and adjust my goals as I go. My endurance has noticeably improved in just a few months."
                            </Box>
                        </div>
                    </div>
                    <div className="mt-10 mb-10 flex items-center w-full">
                        <Image
                            width={150}
                            height={150}
                            src="/assets/images/charles-etoroma.jpg"
                            alt="RunWithAnna"
                            className="rounded-full"
                        />
                        <div className="ml-4 flex-1">
                            <div className="text-2xl font-bold mb-2">RunWithAnna</div>
                            <Box className="w-full text-justify">
                                "Being a mother of two, time is a luxury I don't have. But this app has been a lifesaver! The workouts are short, efficient, and tailored to my abilities and available time. Whether I have 20 minutes or an hour, the app adjusts my training plan so I never miss a workout. It also includes strength and flexibility exercises, which I never knew I needed until I started using them! I've already noticed an improvement in my running form and stamina. Plus, the option to find running buddies nearby has been a great way to stay social and keep myself accountable."
                            </Box>
                        </div>
                    </div>
                    <div className="mt-10 mb-10 flex items-center w-full">
                        <Image
                            width={150}
                            height={150}
                            src="/assets/images/rodion-kutsaiev.jpg"
                            alt="MountainRider85"
                            className="rounded-full"
                        />
                        <div className="ml-4 flex-1">
                            <div className="text-2xl font-bold mb-2">MountainRider85</div>
                            <Box className="w-full text-justify">
                                "As an avid outdoor enthusiast, I'm always looking for new ways to challenge myself on my bike. This app has completely transformed how I train. It doesn't just provide random workouts; it tailors each session to my current fitness level, and it keeps evolving as I progress. The GPS integration is amazing—I've discovered new routes in my area that I would never have found otherwise. The app also tracks my elevation gains, speed, and distance with such precision. And being able to coordinate with other cyclists through the geo-location feature has made my solo rides more social and fun!"
                            </Box>
                        </div>
                    </div>
                    <div className="mt-10 mb-10 flex items-center w-full">
                        <Image
                            width={150}
                            height={150}
                            src="/assets/images/miguel-gonzalez.jpg"
                            alt="FitGrandpa64"
                            className="rounded-full"
                        />
                        <div className="ml-4 flex-1">
                            <div className="text-2xl font-bold mb-2">FitGrandpa64</div>
                            <Box className="w-full text-justify">
                                "At my age, keeping fit is no small feat, but this app has made it easy and enjoyable. The training programs are adjusted to my fitness level and age, and I appreciate that they don't push me too hard but just enough to stay in shape. I've been able to set manageable goals and achieve them without overexerting myself. I also love how the app includes tips for joint health and low-impact exercises that have helped with my flexibility. The geo-location feature has connected me with a cycling group of retirees, and we've had a blast exploring new routes together!"
                            </Box>
                        </div>
                    </div>
                    <div className="mt-10 mb-10 flex items-center w-full">
                        <Image
                            width={150}
                            height={150}
                            src="/assets/images/sam-mcnamara.jpg"
                            alt="CitySprinter22"
                            className="rounded-full"
                        />
                        <div className="ml-4 flex-1">
                            <div className="text-2xl font-bold mb-2">CitySprinter22</div>
                            <Box className="w-full text-justify">
                                "I'm a student, so I'm always on the go, but this app has made it easy to keep up with my running. The app's workout plans are flexible and quick to adapt to my busy schedule. I'm really into high-intensity sprints, and the app provides the perfect balance of interval training and recovery. I've seen improvements in both my speed and endurance in a short amount of time. Also, the geo-location feature is great for finding running groups around the city. Running with others has motivated me to push harder during my workouts, and I've already beaten a few personal records!"
                            </Box>
                        </div>
                    </div>
                    <div className="mt-10 mb-10 flex items-center w-full">
                        <Image
                            width={150}
                            height={150}
                            src="/assets/images/nathan-dumlao.jpg"
                            alt="CyclingMom33"
                            className="rounded-full"
                        />
                        <div className="ml-4 flex-1">
                            <div className="text-2xl font-bold mb-2">CyclingMom33</div>
                            <Box className="w-full text-justify">
                                "I've always loved cycling, but after having kids, finding time to ride has been tough. This app has changed everything! It helps me create training schedules around my kids' nap times and my work hours. I've set achievable goals and love how the app keeps track of my progress with detailed statistics like distance, speed, and calories burned. The geo-location feature is great, too—I've connected with other local moms who cycle, and now we ride together. The social aspect makes it not just about fitness, but also about connecting with a community of like-minded women!"
                            </Box>
                        </div>
                    </div>
                    <div className="mt-10 mb-10 flex items-center w-full">
                        <Image
                            width={150}
                            height={150}
                            src="/assets/images/patrick-hendry.jpg"
                            alt="TrailBlazer29"
                            className="rounded-full"
                        />
                        <div className="ml-4 flex-1">
                            <div className="text-2xl font-bold mb-2">
                                TrailBlazer29
                            </div>
                            <Box className="w-full text-justify">
                                "This app has been fantastic for my trail running. The plans are challenging but not overwhelming, and I've even found a group of people to explore new trails with through the location-based feature!"
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </Container >
    );
}