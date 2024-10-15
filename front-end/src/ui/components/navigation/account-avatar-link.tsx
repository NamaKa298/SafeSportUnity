import { Button } from "@/ui/design-system/button/button"
import { GiHumanTarget } from "react-icons/gi"
import { ActiveLink } from "./active-link"

export const AccountAvatarNavigationLink = () => {
    return (
        <ActiveLink href="/dashboard">
        <Button
          size="small"
          icon={{ icon: GiHumanTarget }}
          iconPosition="left"
        >
          MyProfile
        </Button>
      </ActiveLink>
    )
}