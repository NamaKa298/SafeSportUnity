import { Seo } from "@/ui/components/seo/seo";
import { Typography } from "@/ui/design-system/typography";

export default function Home() {
  return (
    <>
      <Seo title="SafeSportUnity" description="Description..." />
      <div className="space-y-5">
        <Typography>SafeSportUnity</Typography>
        <Typography theme="primary" variant="body-lg" component="h1">
          SafeSportUnity
        </Typography>
        <Typography theme="secondary" variant="lead" component="div">
          SafeSportUnity
        </Typography>
        <Typography variant="body-sm" component="div">
          SafeSportUnity
        </Typography>
        <Typography variant="caption4" component="div">
          SafeSportUnity
        </Typography>
        <Typography variant="caption4" weight="medium" component="div">
          SafeSportUnity
        </Typography>
      </div>
    </>
  );
}
