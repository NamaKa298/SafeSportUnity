/* eslint-disable */
import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import { Logo } from "@/ui/design-system/logo/logo";
import { Button } from "@/ui/design-system/button/button";
import { GiHumanTarget } from "react-icons/gi";
import Link from "next/link";
import { ActiveLink } from "./active-link";


interface Props { }

export const Navigation = ({ }: Props) => {
  return (
    <div className="border-b-2 border-gray-400">
      <Container className="flex items-center justify-between py-0 gap-7">
        <Link href="/">
        <div className="flex items-center gap-2.5">
          <Logo size="small" />
          
          <div className="flex flex-col">
            <div className="text-gray font-extrabold text-[24px]"
              >
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
        </Link>
        
       <div className="flex items-center gap-36 p-10">
          <ActiveLink href="/Activities">
          <Button size="small">
            Activities
          </Button>
          </ActiveLink>
          
          <ActiveLink href="/They_made_it">
          <Button size="small">
            They Did It !
          </Button>
          </ActiveLink>
          
          <ActiveLink href="/MyProfile">
          <Button 
            size="small"
            icon={{ icon: GiHumanTarget }}
            iconPosition="left"
          >
            MyProfile
          </Button>
          </ActiveLink>
          

          <Button baseUrl="/connexion" size="small" variant="secondary">
            Login
          </Button>

        </div>
      </Container>
    </div>
  )
}