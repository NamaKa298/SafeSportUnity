import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri"
import { useAuth } from "@/context/AuthUserContext";


export const HighLightListView = () => {

  const { authUser } = useAuth();

  return (
    <Container className="py-24 space-y-10 bg-gray-400">
      <div className="flex justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10">
          <Image className="rounded" fill src="/assets/images/marathon.jpg" alt="cake picture" />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            Generate custom running workouts to achieve your goal.
          </Typography>
          <div className="space y-3">
            <ListPoint>Take 5 minutes to assess your current condition.</ListPoint>
            <ListPoint> Choose your goal</ListPoint>
            <ListPoint> Put your running shoes on!</ListPoint>
            <ListPoint> Localize your partners and Let's Go Running!! </ListPoint>
          </div>

          {!authUser ?
            <div className="relative inline-block">
              <Button baseUrl="/connexion/inscription" icon={{ icon: RiArrowRightLine }} iconPosition="right">
                Let's go create your account!
              </Button>
              <Image width={15} height={17} src="/assets/svg/cursor.svg" alt="cursor" className="absolute right-10 -bottom-3" />
            </div>
            : ""}
        </div>
      </div>
      <div className="flex flex-row-reverse justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10">
          <Image className="rounded" fill src="/assets/images/bike.jpg" alt="bike picture" />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            Generate custom biking workouts to achieve your goal.
          </Typography>
          <div className="space y-3">
            <ListPoint>Take 5 minutes to assess your current condition.</ListPoint>
            <ListPoint> Choose your goal</ListPoint>
            <ListPoint> Hop on your bike and let's go!!</ListPoint>
            <ListPoint> Localize your partners and Let's Go Biking!! </ListPoint>
          </div>

          {!authUser ?
            <div className="relative inline-block">
              <Button variant="secondary" baseUrl="/connexion/inscription" icon={{ icon: RiArrowRightLine }} iconPosition="right">
                Let's go create your account!
              </Button>
            </div>
            : ""}
        </div>
      </div>
    </Container >

  )

};

interface Props {
  children: React.ReactNode;
}
export const ListPoint = ({ children }: Props) => {
  return (
    <div className="flex items-start gap-2">
      <RiCheckboxCircleLine size={24} className="mt-0.5 text-secondary" />
      <Typography variant="body-lg" component="span">
        {children}
      </Typography>
    </div>
  )

}