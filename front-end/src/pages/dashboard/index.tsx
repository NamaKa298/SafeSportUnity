/* eslint-disable */
/** COMPONENTS */
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { DashBoardPageContainer } from "@/ui/modules/dashboard-page/dashboard-page.container";

export default function Home() {
  return (
    <>
      <Seo title="DashBoard" description="After login this page shows all the services proposed by SafeSportUnity." />

      <Layout>
          <DashBoardPageContainer />
      </Layout>
    </>
      
  );

}
