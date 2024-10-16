import { useAuth } from "@/context/AuthUserContext";
import { GUEST, REGISTERED } from "@/lib/session-status";
import { SessionStatusTypes } from "@/types/session-status-types";
import { ScreenSpinner } from "@/ui/design-system/spinner/screen-spinner";
import { useRouter } from "next/router";

interface Props {
    children: React.ReactNode;
    sessionStatus?: SessionStatusTypes;
}

export const Session = ({ children, sessionStatus }: Props) => {
    const router = useRouter();
    const { authUserIsLoading, authUser } = useAuth();

    if (sessionStatus === GUEST && !authUserIsLoading) { {/* guest = page invitée pas affichée qu'à des membres invités*/}
        if (!authUser) {
            return <>{children}</>;
        } else {
            router.push("/dashboard"); // ici j'invoque une redirection
        }
    }

    if (sessionStatus === REGISTERED && !authUserIsLoading) { {/* page affichés qu'à des membres enregistrés*/}
        if (authUser) {
            return <>{children}</>;
        } else {
            router.push("/connexion"); // ici j'invoque une redirection
        }
    }

    if (!sessionStatus && !authUserIsLoading) {
        return <>{children}</>;
    }
    return <ScreenSpinner />;
};