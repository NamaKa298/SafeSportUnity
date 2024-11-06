import { Session } from "../session/session";
import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";
import { SessionStatusTypes } from "@/types/session-status-types";

interface Props {
    children: React.ReactNode;
    sessionStatus?: SessionStatusTypes;
}

export const Layout = ({
    children,
    sessionStatus,
}: Props) => {
    return (
        <Session sessionStatus={sessionStatus}>
            <Navigation />
            {children}
            <Footer />
        </Session>
    )
};