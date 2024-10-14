import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography";
import { Typewriter } from "../typewriter/typewriter";

export const HeroTopView = () => {
    const text = "Achieve your fitness goals with ease and motivation! We provide personalized training plans tailored to your level, goals, and schedule ! Join group workout sessions organized near you!!";

    return (
        <div>
          <Container className="w-[90%] max-w-full h-[130px] overflow-y-auto mx-auto bg-primary-300 flex items-center justify-center">
            <div>
              <Typography variant="h3" component="h3" className="w-full break-words p-4"> {/* Padding ajouté */}
                <Typewriter text={text} speed={100} resetDelay={10000} />
              </Typography>
            </div>
          </Container>
          <hr />
          
        </div>
      );
};
