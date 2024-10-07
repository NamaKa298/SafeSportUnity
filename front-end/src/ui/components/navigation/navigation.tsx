/* eslint-disable */
import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import { Logo } from "@/ui/design-system/logo/logo";
import { Button } from "@/ui/design-system/button/button";
import { RiRunLine } from "react-icons/ri";
import { GiHumanTarget } from "react-icons/gi";


interface Props {}

export const Navigation = ({ }: Props) => {
  return (
    <div className="border-b-2 border-gray-400">
      <Container className="flex items-center justify-between py-1.5 gap-7">
        <div className="flex items-center gap-2.5">
          <Logo size="small" />
          <div className="flex flex-col">
            <div className="text-gray font-extrabold text-[24px]">
              SafeSportUnity
            </div>
            <Typography
              variant="caption4"
              component="span"
              theme="gray"
            >
              Just Do It Safely with your Partners !
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-16 p-10">
        <Button
            size="small"
            icon={{ icon: RiRunLine }}
            iconPosition="left"
          >
            SafeSportUnity
          </Button>
          <Button size="small">
            Activities
          </Button>
          <Button size="small">
            They Made It !
          </Button>
          <Button 
            size="small"
            icon={{ icon: GiHumanTarget }}
            iconPosition="left"
            >
            MyProfile
          </Button>
          <Button size="small" variant="secondary">
            Login
          </Button>
        </div>
      </Container>
    </div>
  )
}