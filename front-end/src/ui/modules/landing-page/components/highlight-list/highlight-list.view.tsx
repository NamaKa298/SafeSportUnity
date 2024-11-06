import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri"

export const HighLightListView = () => {
  return (
    <Container className="py-24 space-y-10">
      <div className="flex justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10">
          <Image className="rounded" fill src="/assets/images/training001.png" alt="training picture" />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            Personnal Training Generate by IA
          </Typography>
          <div className="space y-3">
            <ListPoint> 1/Tell us more about yourself:</ListPoint>
            <ListPoint> 2/Choose your sport</ListPoint>
            <ListPoint> 3/Choose the distance you want to train for?</ListPoint>
          </div>
          <div className="relative inline-block">
              <Button baseUrl="/" icon={{icon: RiArrowRightLine}} iconPosition="right">
                Let's Go!
              </Button>
              <Image width={15} height={17} src="/assets/svg/cursor.svg" alt="cursor" className="absolute right-10 -bottom-3" />
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10">
          <Image className="rounded" fill src="/assets/images/training002.png" alt="training picture" />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            receive and store your personnal training!
          </Typography>
          <div className="space y-3">
            <ListPoint> 1/Put your shoes on!</ListPoint>
            <ListPoint> 2/Drink water!</ListPoint>
            <ListPoint> 3/Let's Go!</ListPoint>
          </div>
          <div className="relative inline-block">
              <Button variant="secondary" baseUrl="/" icon={{icon: RiArrowRightLine}} iconPosition="right">
                Come with us and enjoy sport!
              </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10">
          <Image className="rounded" fill src="/assets/images/screenshot_007.png" alt="training picture" />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
          Now Find Your Training Partner!
          </Typography>
          <div className="space y-3">
            <ListPoint> Select the sport you want to practice!</ListPoint>
            <ListPoint> Choose the date and start time</ListPoint>
            <ListPoint> find other members nearby who are available!</ListPoint>
          </div>
          <div className="relative inline-block">
              <Button variant="secondary" baseUrl="/" icon={{icon: RiArrowRightLine}} iconPosition="right">
                try and find your partner and more!
              </Button>
          </div>
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