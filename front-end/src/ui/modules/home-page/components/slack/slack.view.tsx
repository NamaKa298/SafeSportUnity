import { LinkTypes } from "@/lib/link-type"
import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Logo } from "@/ui/design-system/logo/logo"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const SlackView = () => {
  return (
    <Container className="flex justify-between">
      <div className="flex flex-col justify-center max-w-2xl space-y-5">
        <div className="flex items-center gap-2">
          <Logo size="small" />
          <Typography
            variant="caption2"
            component="span"
            weight="medium"
          >
            SafeSportUnity
          </Typography>
        </div>
        <Typography variant="h2" component="h2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography variant="body-lg" component="p" theme="gray" className="max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ! {" "}
        </Typography>
        <Button baseUrl="/https://github.com/dashboard" linkType={LinkTypes.EXTERNAL}>
          rejoins nous!!!
        </Button>
      </div>
      <div className="relative w-[600px] h-[600px]">
        <Image
          fill
          src={"/assets/images/icone_training.jpg"}
          alt="logo SafeSportUnity"
        />
      </div>
    </Container>

  )



}