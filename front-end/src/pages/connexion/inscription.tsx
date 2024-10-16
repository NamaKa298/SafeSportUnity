/** COMPONENTS */
import { GUEST } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { RegisterContainer } from "@/ui/modules/authentication/register/register.container";

export default function Register() {
    return (
        <>
            <Seo
                title="Create An Account"
                description="Create An Account page"
            />
            <Layout sessionStatus={GUEST}> {/*page register s'affiche uniquement si on est pas connecté*/}
                <RegisterContainer />
            </Layout>
        </>
    );
}
