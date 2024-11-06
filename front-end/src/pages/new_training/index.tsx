/* eslint-disable */
/** COMPONENTS */
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { NewTrainingPageContainer } from "@/ui/modules/new_training-page/new_training-page.container";

export default function Home() {
  return (
    <>
      <Seo title="new_training" description="This page guide the user to create a new training running or cycling plan" />

      <Layout>
          <NewTrainingPageContainer />
      </Layout>
    </>
      
  );

}
