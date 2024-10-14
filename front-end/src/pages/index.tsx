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
      <Seo title="SafeSportUnity" description="Description..." />

      <Layout>
          <HomePageContainer /> {/* On pourrait mettre une condition pour ne pas afficher la même pas si on est connecté ou non*/}
      </Layout>
    </>
      
  );

}
