import { Seo } from "@/ui/components/seo/seo";
import { Layout } from '@/ui/components/layout/layout';
import { TrainingPartnerPageView } from '@/ui/modules/traning-partner-page/training_partner-page.view';
import { REGISTERED } from '@/lib/session-status';

export default function Home() {
  return (
    <>
      <Seo title="Find Your Training Partners"
      description="Expérience des utilisateurs" />

      <Layout sessionStatus={REGISTERED}> {/*s'affiche dans tous les cas*/}
          <TrainingPartnerPageView/>
      </Layout>
    </>
      
  );

}