import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography";
import { Typewriter } from "../typewriter/typewriter";

export const HeroTopView = () => {
    const text = "With our web app, you can finally achieve your fitness goals with ease and motivation.We provide personalized training plans tailored to your level, goals, and schedule. Additionally, our geolocation feature allows you to discover and join group workout sessions organized near you.";

    return (
        <div>
          <Container className="w-[90%] max-w-full h-[100px] overflow-y-auto mx-auto">
            <div>
              <Typography variant="caption1" component="h3" className="w-full break-words p-4"> {/* Padding ajouté */}
                <Typewriter text={text} speed={100} resetDelay={10000} />
              </Typography>
            </div>
          </Container>
          <hr />
          
        </div>
      );
};
