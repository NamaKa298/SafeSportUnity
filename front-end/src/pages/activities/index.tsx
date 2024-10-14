/* eslint-disable */
/** COMPONENTS */
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { ActivitiesPageContainer } from "@/ui/modules/Activities-page/activities-page.container";

export default function Home() {
  return (
    <>
      <Seo title="Activities" description="This page shows all the services proposed by SafeSportUnity.
          If the user want to start with us He can go to the login page" />

      <Layout>
          <ActivitiesPageContainer />
      </Layout>
    </>
      
  );

}
