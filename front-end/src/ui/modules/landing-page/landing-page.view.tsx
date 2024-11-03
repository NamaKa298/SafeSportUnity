import { CallToActionView } from "@/ui/design-system/call-to-action/call-to -action.view";
import { FeaturedView } from "./components/featured/featured.view";
import { FormationView } from "./components/formation/formation.view";
import { HeroTopView } from "./components/hero-top/hero-top.view";
import { HighLightListView } from "./components/highlight-list/highlight-list.view";
import { SlackView } from "./components/slack/slack.view";


export const LandingPageView = () => {
    return (
        <> 
            {/* <HeroTopView /> */}
            {/* <FeaturedView /> pour la page activities */}
            <SlackView />
            <FormationView/>
            <HighLightListView/>
            <CallToActionView/>
        </>
    
    );
};    