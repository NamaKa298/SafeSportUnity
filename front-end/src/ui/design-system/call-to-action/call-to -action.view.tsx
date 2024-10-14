import { Container } from "@/ui/components/container/container"
import { Typography } from "../typography"
import { Button } from "../button/button"
import { LinkTypes } from "@/lib/link-type"
import Image from "next/image"

export const CallToActionView = () => {
    return (
      <div className="relative overflow-hidden bg-primary">
        <Container className="py-20">
            <div className="relative z-10 flex justify-between items-center max-w-3xl space-y-5">
                <Typography variant="h2" theme="white" component="h2">
                    mettre le texte que nous voulons ici
                </Typography>
                <div>
                  <Button variant="success" baseUrl="#/" linkType={LinkTypes.EXTERNAL}>
                      TEXT
                  </Button>
                </div>
            </div>
            <div>
              <Image width={800} height={600} src="/assets/svg/running_shoes.svg" alt="Illustatrion bombe" className="absolute -bottom-[40px] -right-[0px]" />
            </div>
        </Container>

      </div>


    )


}