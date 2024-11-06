import { REGISTERED } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import TrainingPartnersContainer from "@/ui/modules/traning-partner-page/training-partner.container";

export default function FindPartners() {
    return (
        <div >
            <Seo
                title="Find Yours Partners"
                description="Description de la page"
            />
            <Layout sessionStatus={REGISTERED}> {/*UserAccountContainer ne s'affiche pas si on est pas enregistrés*/}
                <TrainingPartnersContainer />
            </Layout>
        </div>
    );
};