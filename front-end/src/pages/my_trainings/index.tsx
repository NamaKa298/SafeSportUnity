/* eslint-disable */
/** COMPONENTS */
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { MyTrainingPageContainer } from "@/ui/modules/my_trainings-page/my_trainings-page.container";

export default function Home() {
  return (
    <>
      <Seo title="my_trainings" description="This page shows to the user his training plans" />

      <Layout>
          <MyTrainingPageContainer />
      </Layout>
    </>
      
  );

}
