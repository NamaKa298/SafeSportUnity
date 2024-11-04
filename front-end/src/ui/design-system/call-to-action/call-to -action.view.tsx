import { Container } from "@/ui/components/container/container"
import { Typography } from "../typography"
import Image from "next/image"

export const CallToActionView = () => {
    return (
      <div className="relative overflow-hidden bg-primary">
        <Container className="py-20">
            <div className="relative z-10 flex justify-between items-center max-w-3xl space-y-5">
                <Typography variant="h3" theme="white" component="h3">
                Alone, we may sometimes go a bit faster,<br></br> but together, we’ll definitely go farther!
                </Typography>
                <div>
                  {/* <Button variant="success" baseUrl="#/" linkType={LinkTypes.EXTERNAL}>
                      TEXT
                  </Button> */}
                </div>
            </div>
            <div>
              <Image width={800} height={600} src="/assets/svg/running_shoes.svg" alt="Illustatrion bombe" className="absolute -bottom-[40px] -right-[0px]" />
            </div>
        </Container>

      </div>


    )


}