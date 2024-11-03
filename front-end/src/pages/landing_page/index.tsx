/* eslint-disable */
/** COMPONENTS */
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { LandingPageContainer } from "@/ui/modules/landing-page/landing-page.container";

export default function Home() {
  return (
    <>
      <Seo title="landing_page" description="This page shows what you can do with this web app" />

      <Layout>
          <LandingPageContainer />
      </Layout>
    </>
      
  );

}
