/** COMPONENTS */
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { UserAccountContainer } from "@/ui/modules/user-profile/user-account/user-account.container";

export default function Connexion() {
    return (
        <>
            <Seo
                title="My account"
                description="Description de la page"
            />
            <Layout>
                <UserAccountContainer />
            </Layout>
        </>
    );
}
