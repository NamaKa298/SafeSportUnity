/** COMPONENTS */
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { LoginContainer } from "@/ui/modules/authentication/login/login.container";

export default function Connexion() {
    return (
        <>
            <Seo
                title="Sign In"
                description="Sign In page"
            />
            <Layout>
                <LoginContainer />
            </Layout>
        </>
    );
}
