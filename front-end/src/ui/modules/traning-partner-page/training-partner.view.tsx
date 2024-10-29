import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { MapComponent } from "./training-partner.container";


export const TrainingPartnersView = () => {
    return (
        <Container className="gap-20 mb-32 pt-32">
            <div className="flex flex-col items-center">
                <div className=" justify-between">
                    <Typography variant="h1" component="h1">
                        Find Your Training Partners
                    </Typography>
                    <MapComponent />
                </div>
            </div>
        </Container>
    )
};