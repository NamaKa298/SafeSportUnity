import { Typography } from "@/ui/design-system/typography/typography"
import { ContactDetailsForm } from "./contact-details.form"
import { FormsType } from "@/types/forms"

interface Props {
    form: FormsType;
}
export const ContactDetailsView = ({form}: Props) => {
    return (
        <div className="space-y-5 bg-gray-300">
            <Typography className="text-center" variant="h2" component="h2">
                Contact Details
            </Typography>
            <ContactDetailsForm form={form}/>
        </div>
    )
}