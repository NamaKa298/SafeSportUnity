import { Session } from "../session/session";
import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";

interface Props {
    children: React.ReactNode;
    sessionStatus?: string;
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
}