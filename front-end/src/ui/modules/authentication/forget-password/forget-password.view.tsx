import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import Link from "next/link";
import { ForgetPasswordForm } from "./forget-password-form";
import { FormsType } from "@/types/forms";

interface Props {
    form: FormsType;
}

export const ForgetPasswordView = ({form}: Props) => {
    return (
        <Container className="gap-20 mb-32 pt-40">
            <div className="flex items-center">
                <Box padding_y="py-5">
                    <div className="flex items-center justify-between">
                        <Typography variant="h5" component="h1">
                            Forget Password ?
                        </Typography>
                        <Typography
                            variant="caption4"
                            component="span"
                            theme="primary"
                        >
                            <Link href="/connexion">Sign In</Link>
                        </Typography>
                    </div>
                    <ForgetPasswordForm form={form}/>
                </Box>
            </div>
        </Container>
    );
}