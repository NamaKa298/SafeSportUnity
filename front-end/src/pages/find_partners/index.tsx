import { Seo } from "@/ui/components/seo/seo";
import { Layout } from '@/ui/components/layout/layout';
import { REGISTERED } from '@/lib/session-status';
import { TrainingPartnersContainer } from "@/ui/modules/traning-partner-page/training-partner.container";

export default function Home() {
  return (
    <>
      <Seo title="Find Your Training Partners"
        description="Expérience des utilisateurs" />

      <Layout sessionStatus={REGISTERED}> {/*s'affiche dans tous les cas*/}
        <TrainingPartnersContainer />
      </Layout>
    </>

  );

}