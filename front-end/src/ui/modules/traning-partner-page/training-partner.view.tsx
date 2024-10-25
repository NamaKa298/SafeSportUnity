import { Typography } from "@/ui/design-system/typography/typography";
import { FormsType } from "@/types/forms";
import { TrainingPartnersForm } from "./training-partner.form";

interface Props {
    form: FormsType;
}
export const TrainingPartnersView = ({ form }: Props) => {
    return (
        <div className="space-y-5">
            <Typography variant="h1" component="h1">
                Find Your Training Partners
            </Typography>
            <TrainingPartnersForm form={form} />
        </div>
    )
};