import { Seo } from "@/ui/components/seo/seo";
import { Typography } from "@/ui/design-system/typography";

export default function Home() {
  return (
    <>
      <Seo title="SafeSportUnity" description="Description..." />
      <Typography variant="h1" component="h1">
        SafeSportUnity
      </Typography>
    </>
  );
}
