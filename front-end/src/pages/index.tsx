/* eslint-disable */

import { Seo } from "@/ui/components/seo/seo";
import { Button } from "@/ui/design-system/button/button";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography";
import { RiUser6Fill } from "react-icons/ri";
import { Logo } from "@/ui/design-system/logo/logo";
import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Footer } from "@/ui/components/navigation/footer";


export default function Home() {
  return (
    <>
      <Seo title="SafeSportUnity" description="Description..." />

      <Navigation />
    <Footer/>
    </>
      
  );

}
