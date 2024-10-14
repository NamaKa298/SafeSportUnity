/* eslint-disable */
import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import { Logo } from "@/ui/design-system/logo/logo";
import { Button } from "@/ui/design-system/button/button";
import Link from "next/link";
import { ActiveLink } from "./active-link";
import { useAuth } from "@/context/AuthUserContext";
import { AccountAvatarNavigationLink } from "./account-avatar-link";


interface Props { }

export const Navigation = ({ }: Props) => {
  const { authUser } = useAuth();
  console.log('authUser', authUser);

  const authentificationSystem = (
    <Button baseUrl="/connexion" size="small" variant="secondary">
      Login
    </Button>
  );

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
              They Made It !
            </Button>

          </ActiveLink>



          {!authUser ? authentificationSystem : <AccountAvatarNavigationLink />}

        </div>
      </Container>
    </div>
  )
}