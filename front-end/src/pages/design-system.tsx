// COMPONENT
import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";

// DESIGN SYSTEM
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";

// ICO
import { RiUser6Fill } from "react-icons/ri";

export default function DesignSystem() {
  return (
    <>
      <Seo
          title="Design System"
          description="Description..."
      />

      <Layout>
        <Container className="py-10 space-y-5">

          {/* Typography */}
          <div className="space-y-2">
            <Typography variant="caption2" weight="medium">
              Typography
            </Typography>

            <div className="flex flex-col gap-2 p-5 border border-gray-400 divide-y-2 divide-gray-400 rounded">
              <div className="pb-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                  Display
                </Typography>
                <Typography variant="display">
                  Just Do It
                </Typography>*
              </div>

              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                  H1
                </Typography>
                <Typography variant="h1">
                  Just Do It Together Safely
                </Typography>
              </div>

              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                  H2
                </Typography>
                <Typography variant="h2">
                  Just Do It Together Safely with your local partners
                </Typography>
              </div>

              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                  H3
                </Typography>
                <Typography variant="h3">
                  Just Do It Together Safely with your local partners
                  find your best training plan and go running with your friends
                </Typography>
              </div>

              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                  H4
                </Typography>
                <Typography variant="h4">
                  Just Do It Together Safely with your local partners
                  find your best training plan and go running with your friends
                  follow your training plan and track your progress
                </Typography>
              </div>

              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                  H5
                </Typography>
                <Typography variant="h5">
                  Just Do It Together Safely with your local partners
                  find your best training plan and go running with your friends
                  follow your training plan and track your progress
                  share your progress with your friends and family
                </Typography>
              </div>

              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                  Lead
                </Typography>
                <Typography variant="lead">
                  Just Do It Together Safely with your local partners
                  find your best training plan and go running with your friends
                  follow your training plan and track your progress
                  share your progress with your friends and family
                  be safe and have fun
                </Typography>
              </div>

              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                  Body lg
                </Typography>
                <Typography variant="body-lg">
                  Just Do It Together Safely with your local partners
                  find your best training plan and go running with your friends
                  follow your training plan and track your progress
                  share your progress with your friends and family
                  be safe and have fun with your friends
                </Typography>
              </div>

              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                  Body base
                </Typography>
                <Typography variant="body-base">
                  Just Do It Together Safely with your local partners
                  find your best training plan and go running with your friends
                  follow your training plan and track your progress
                  share your progress with your friends and family
                  be safe and have fun with your friends and family
                </Typography>
              </div>

              <div className="py-5 space-y-2">
                <Typography variant="caption3" weight="medium">
                  Body sm
                </Typography>
                <Typography variant="body-sm">
                  Just Do It Together Safely with your local partners
                  find your best training plan and go running with your friends
                  follow your training plan and track your progress
                  share your progress with your friends and family
                  be safe and have fun with your friends and family
                  be proud of your progress
                </Typography>
              </div>

              <div className="py-5">
                {/* Grid with 4 columns and 3 rows */}
                <div className="grid grid-cols-4 gap-4 text-center">
                  {/* First row (Captions) */}
                  <Typography variant="caption3" weight="medium">
                    Caption 1
                  </Typography>
                  <Typography variant="caption3" weight="medium">
                    Caption 2
                  </Typography>
                  <Typography variant="caption3" weight="medium">
                    Caption 3
                  </Typography>
                  <Typography variant="caption3" weight="medium">
                    Caption 4
                  </Typography>

                  {/* Second row (Regular examples) */}
                  <Typography variant="caption1" weight="regular">
                    Regular
                  </Typography>
                  <Typography variant="caption2" weight="regular">
                    Regular
                  </Typography>
                  <Typography variant="caption3" weight="regular">
                    Regular
                  </Typography>
                  <Typography variant="caption4" weight="regular">
                    Regular
                  </Typography>

                  {/* Third row (Medium examples) */}
                  <Typography variant="caption1" weight="medium">
                    Medium
                  </Typography>
                  <Typography variant="caption2" weight="medium">
                    Medium
                  </Typography>
                  <Typography variant="caption3" weight="medium">
                    Medium
                  </Typography>
                  <Typography variant="caption4" weight="medium">
                    Medium
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-7">
            {/* Spinner */}
            <div className="space-y-2">
              <Typography variant="caption2" weight="medium">
                Spinner
              </Typography>
              <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                <Spinner size="small" />
                <Spinner />
                <Spinner size="large" />
              </div>
            </div>

            {/* Avatar */}
            <div className="space-y-2">
              <Typography variant="caption2" weight="medium">
                Avatar
              </Typography>
              <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                <Avatar
                  size="small"
                  src="/assets/images/avatar.png"
                  alt="Avatar de nous"
                />
                <Avatar
                  src="/assets/images/avatar.png"
                  alt="Avatar de nous"
                />
                <Avatar
                  size="large"
                  src="assets/images/fabrice.png"
                  alt="Avatar de nous"
                />
              </div>
            </div>

            {/* Logo */}
            <div className="space-y-2">
              <Typography variant="caption2" weight="medium">
                Logo
              </Typography>
              <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                <Logo size="very-small" />
                <Logo size="small" />
                <Logo />
                <Logo size="large" />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-2">
            <Typography variant="caption2" weight="medium">
              Buttons
            </Typography>
            <div className="p-5 space-y-8 border border-gray-400 rounded">
              <div className="space-y-2">
                <Button>Accent</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Accent</Button>
                <Button variant="disabled" disabled>
                  Accent
                </Button>
                <Button
                  variant="ico"
                  icon={{ icon: RiUser6Fill }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-10">
            <Spinner size="small" />
            <Spinner />
            <Spinner size="large" />
          </div>

          <div className="flex items-center gap-4 p-10">
            <Button
              isLoading size="small">Accent</Button>
            <Button
              isLoading
              size="small"
              icon={{ icon: RiUser6Fill }}
              iconPosition="left"
            >
              Accent
            </Button>
            <Button
              isLoading
              size="small"
              icon={{ icon: RiUser6Fill }}
            >
              Accent
            </Button>
            <Button
              isLoading size="small" variant="secondary">Secondary</Button>
            <Button
              isLoading size="small" variant="outline">Accent</Button>
            <Button
              isLoading size="small" variant="disabled" disabled>
              Accent
            </Button>
            <Button
              isLoading
              size="small"
              variant="ico"
              icon={{ icon: RiUser6Fill }}
            />
          </div>

          <div className="flex items-center gap-4 p-10">
            <Button size="small">Accent</Button>
            <Button
              size="small"
              icon={{ icon: RiUser6Fill }}
              iconPosition="left"
            >
              Accent
            </Button>
            <Button
              size="small"
              icon={{ icon: RiUser6Fill }}
            >
              Accent
            </Button>
            <Button size="small" variant="secondary">Secondary</Button>
            <Button isLoading size="small" variant="outline">Accent</Button>
            <Button size="small" variant="disabled" disabled>
              Accent
            </Button>
            <Button
              size="small"
              variant="ico"
              icon={{ icon: RiUser6Fill }}
            />
          </div>

          <div className="flex items-center gap-4 p-10">
            <Button>Accent</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Accent</Button>
            <Button variant="disabled" disabled>
              Accent
            </Button>
            <Button
              variant="ico"
              icon={{ icon: RiUser6Fill }}
            />
          </div>

          <div className="flex items-center gap-4 p-10">
            <Button size="large">Accent</Button>
            <Button size="large" variant="secondary">Secondary</Button>
            <Button size="large" variant="outline">Accent</Button>
            <Button size="large" variant="disabled" disabled>
              Accent
            </Button>
            <Button
              size="large"
              variant="ico"
              icon={{ icon: RiUser6Fill }}
              iconTheme="secondary"
            />
            <Button
              size="large"
              variant="ico"
              icon={{ icon: RiUser6Fill }}
              iconTheme="gray"
            />
            <Button
              size="large"
              variant="ico"
              icon={{ icon: RiUser6Fill }}
            />
          </div>

        </Container >
      </Layout>

     
    </>
  )
}