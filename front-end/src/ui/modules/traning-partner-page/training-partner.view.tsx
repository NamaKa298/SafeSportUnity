import { Typography } from "@/ui/design-system/typography/typography";
import { FormsType } from "@/types/forms";
import { TrainingPartnersForm } from "./training-partner.form";
import ActivityList from "./training-partner.list";
import dynamic from "next/dynamic";
import { Container } from "@/ui/components/container/container";


interface Props {
    form: FormsType;
}


const MapWithNoSSR = dynamic(() => import('@/ui/modules/traning-partner-page/component/Maps'), {
    ssr: false,
});

export const TrainingPartnersView = ({ form }: Props) => {
    return (
        <Container>
        <div className="space-y-5">
            <Typography variant="h1" component="h1">
                Find Your Training Partners
            </Typography>
            <div className="grid grid-cols-2 pt-10 gap-6">
                <div className="col-span-1 space-y-4">
                    <div className="gap-6">
                        <MapWithNoSSR />
                        {/* Appel du composant Map */}
                    </div>
                    <TrainingPartnersForm form={form} />
                </div>
                <div className="col-span-1 gap-6 ml-30">
                    <ActivityList />
                </div>
            </div>
        </div >
        </Container>
    )
};