import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { Button } from "@/ui/design-system/button/button"

export const FormationView = () => {

  return (
    <div className="bg-gray-300">
      <Container className="py-24 text-center">
        <Typography variant="h2" component="h2" className="mb-2.5">
        Where it all begins!!
        </Typography>
        <Typography variant="lead" component="h3" className="mb-5">
        Once you’re a member of SafeSportUnity, here’s your dashboard!
        All that’s left is to create a personalized training plan
        or enable geolocation to find your future training partners!
        </Typography>
                
        <div className="flex justify-center">
        <Image
          width={800}
          height={600}
          src="/assets/images/screenshot_005.png"
          alt="fusion des sports"
          className="object-center rounded my-8"
        />
        </div>
        <Button baseUrl="/">
        Let's go to Login and run
        </Button>     
      </Container>
    </div>
  );
};
