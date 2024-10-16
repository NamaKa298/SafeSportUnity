import { Typography } from "@/ui/design-system/typography/typography"
import { ContactDetailsForm } from "./contact-details.form"
import { FormsType } from "@/types/forms"

interface Props {
    form: FormsType;
}
export const ContactDetailsView = ({form}: Props) => {
    return (
        <div className="space-y-5">
            <Typography variant="h1" component="h1">
                Contact Details
            </Typography>
            <ContactDetailsForm form={form}/>
        </div>
    )
}