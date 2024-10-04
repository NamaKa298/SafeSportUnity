import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";

interface Props { }

export const Navigation = ({ }: Props) => {
  return (
    <div className="border-b-2 border-gray-400">
      <Container className="">
        <div>
          <Logo size="small" />
          <div>
            <div className="text-gray font-extrabold text-[24px]">
              SafeSportUnity
            </div>
            <Typography
              variant="caption4"
              component="span"
              theme="gray"
            >
              Just Do It Safely with your Partners !
            </Typography>
          </div>
        </div>
        <div></div>
      </Container>
    </div>
  )
}