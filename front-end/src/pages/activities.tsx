/* eslint-disable */
/** COMPONENTS */
import { Layout } from "@/ui/components/layout/layout";
import { Footer } from "@/ui/components/navigation/footer";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";
import { HomePageContainer } from "@/ui/modules/home-page/home-page.container";

export default function Home() {
  return (
    <>
      <Seo title="Activities" description="This page shows all the services proposed by SafeSportUnity.
          If the user want to start with us He can go to the login page" />

      <Layout>
          <HomePageContainer />
      </Layout>
    </>
      
  );

}
