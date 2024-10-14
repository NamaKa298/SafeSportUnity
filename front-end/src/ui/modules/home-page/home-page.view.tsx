import { FeaturedView } from "./components/featured/featured.view";
import { FormationView } from "./components/formation/formation.view";
import { HeroTopView } from "./components/hero-top/hero-top.view";
import { SlackView } from "./components/slack/slack.view";


export const HomePageView = () => {
    return (
        <> 
            <HeroTopView />
            <FeaturedView />
            <SlackView />
            <FormationView/>

        </>
    
    );
};    