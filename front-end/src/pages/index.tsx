import { Seo } from "@/ui/components/seo/seo";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
      <>
          <Seo title="SafeSportUnity" description="Description..." />
            
            <div className="space-y-5">
              <Typography variant = "display" component = "div">
                  SafeSportUnity.com
              </Typography>
              <Typography theme="primary" variant = "body-lg" component = "h1">
                  SafeSportUnity.com
              </Typography>
              <Typography theme="secondary" variant="lead" component = "div">
                  SafeSportUnity.com
              </Typography>
              <Typography variant = "body-sm" component = "div">
                  SafeSportUnity.com
              </Typography>
              <Typography variant = "caption4" component = "div">
                  SafeSportUnity.com
              </Typography>
              <Typography variant = "caption4" weight="medium" component = "div">
                  SafeSportUnity.com
              </Typography>
            </div>
      </>
  );
}