/* eslint-disable */
/** COMPONENTS */
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { TheyMadeItPageView } from "@/ui/modules/they-made-it-page/they_made_it-page.view";

export default function Home() {
  return (
    <>
      <Seo title="They Made It"
      description="Expérience des utilisateurs" />

      <Layout> {/*s'affiche dans tous les cas*/}
          <TheyMadeItPageView/>
      </Layout>
    </>
      
  );

}