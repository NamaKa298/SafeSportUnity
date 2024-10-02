import { Seo } from "@/ui/components/seo/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography";

export default function Home() {
  return (
    <>
      <Seo title="SafeSportUnity" description="Description..." />
      <div className="flex items-center gap-4 p-10">
        <Button size="small">Accent</Button>
        <Button size="small" variant="secondary">Secondary</Button>
        <Button size="small" variant="outline">Accent</Button>
        <Button size="small" variant="disabled" disabled>
          Accent
        </Button>
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button>Accent</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Accent</Button>
        <Button variant="disabled" disabled>
          Accent
        </Button>
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button size="large">Accent</Button>
        <Button size="large" variant="secondary">Secondary</Button>
        <Button size="large" variant="outline">Accent</Button>
        <Button size="large" variant="disabled" disabled>
          Accent
        </Button>
      </div>

      {/*
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
      */}
    </>
  );
}
