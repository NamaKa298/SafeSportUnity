import { Typography } from "@/ui/design-system/typography";
import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";

export const TheyMadeItPageView = () => {
    return (
        <Container className="gap-20 mb-32 pt-40">
            <div className="flex items-center">
                <div className="flex items-center justify-between">
                    <Typography variant="h1" component="h1">
                        They Made It !
                    </Typography>
                    <Box>
                        RunnerRookie20
                        <Box>
                        "I joined the training sessions last month, and I’m amazed by how much I’ve improved my running time! The coaches are incredibly supportive and provide personalized tips. The community aspect is fantastic; I’ve met so many people who share the same passion for fitness, and we often motivate each other during our runs. I feel more confident and excited to keep pushing my limits!"
                        </Box>
                    </Box>
                </div>
            </div>
        </Container>
    );

}