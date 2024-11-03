import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography"
import Image from "next/image"

export const SlackView = () => {
  return (
    <Container className="flex justify-between mt-10">
      <div className="flex flex-col justify-center max-w-2xl space-y-5">
        {/* <div className="flex items-center gap-2">
          <Logo size="small" />
          <Typography
            variant="caption2"
            component="span"
            weight="medium"
          >
            SafeSportUnity
          </Typography>
        </div> */}
        <Typography variant="h3" component="h3">
          SafeSportUnity Define Your Next Training Plan and Find your Sparing Partners!.
        </Typography>
        <Typography variant="body-lg" component="p" theme="gray" className="max-w-lg">
          Welcome to the landing page dedicated to our end-of-first-year programming fundamentals project <br /> <br />

          We are Marion and Benoit, students at Holberton School in Rodez, France.<br /> <br />

          Our project is driven by our shared passion for endurance sports.

          In our daily training, we often faced two challenges:<br /> <br />

          which exercises to practice to gradually reach our goals, and how to easily connect with people around us who, like us, want to train together.<br /> <br />
          Endurance sports are tough! And everyone will tell you: having a training partner changes everything!<br /> <br />

          That’s why we’ve tried to tackle this challenge using the knowledge we gained during our first Fundamentals year at Holberton! {" "}
        </Typography>
        <Button baseUrl="/">
          Let us show you!
        </Button>
      </div>
      <div className="relative w-[600px] h-auto flex items-center">
        <Image className="rounded"
          fill
          src={"/assets/images/image_1 landing.jpg"}
          alt="bike and running picture"
          style={{ objectFit: "cover", height: "100%" }}
        />
      </div>
    </Container>

  )



}