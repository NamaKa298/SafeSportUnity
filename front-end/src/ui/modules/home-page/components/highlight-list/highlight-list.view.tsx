import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography"
import Image from "next/image"
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri"

export const HighLightListView = () => {
  return (
    <Container className="py-24 space-y-10">
      <div className="flex justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10">
          <Image fill src="/assets/images/cake.png" alt="cake picture" />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            mettre le texte que nous voulons ici
          </Typography>
          <div className="space y-3">
            <ListPoint> 1/Lorem ipsum dolor sit amet,</ListPoint>
            <ListPoint> 2/Lorem ipsum dolor sit amet,</ListPoint>
            <ListPoint> 3/Lorem ipsum dolor sit amet,</ListPoint>
          </div>
          <div className="relative inline-block">
              <Button baseUrl="/#" icon={{icon: RiArrowRightLine}} iconPosition="right">
                Let's Go!
              </Button>
              <Image width={15} height={17} src="/assets/svg/cursor.svg" alt="cursor" className="absolute right-10 -bottom-3" />
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10">
          <Image fill src="/assets/images/pedale.png" alt="pedal picture" />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            mettre le texte que nous voulons ici
          </Typography>
          <div className="space y-3">
            <ListPoint> 1/Lorem ipsum dolor sit amet,</ListPoint>
            <ListPoint> 2/Lorem ipsum dolor sit amet,</ListPoint>
            <ListPoint> 3/Lorem ipsum dolor sit amet,</ListPoint>
          </div>
          <div className="relative inline-block">
              <Button variant="secondary" baseUrl="/#" icon={{icon: RiArrowRightLine}} iconPosition="right">
                texte libre
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