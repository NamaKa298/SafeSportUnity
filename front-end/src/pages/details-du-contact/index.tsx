/** COMPONENTS */
import { REGISTERED } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { ContactDetailsContainer } from "@/ui/modules/user-profile/contact-details/contact-details.container";

export default function contactDetails() {
    return (
        <>
            <Seo
                title="Contact Details"
                description="Description de la page"
            />
            <Layout sessionStatus={REGISTERED}> {/*UserAccountContainer ne s'affiche pas si on est pas enregistrés*/}
                <ContactDetailsContainer />
            </Layout>
        </>
    );
}
