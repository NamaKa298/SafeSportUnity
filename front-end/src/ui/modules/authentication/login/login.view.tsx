import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography";
import Link from "next/link";
import { LoginForm } from "./login-form";
import { FormsType } from "@/types/forms";

interface Props {
    form: FormsType;
}

export const LoginView = ({form}: Props) => {
    return (
        <Container className="gap-20 mb-32 pt-40">
            <div className="flex items-center">
                <Box padding_y="py-5">
                    <div className="flex items-center justify-between">
                        <Typography variant="h5" component="h1">
                            Sign In
                        </Typography>
                        <div className="flex items-center gap-2">
                            <Typography variant="caption4" component="span" theme="gray">
                                Dont Have An Account ?
                            </Typography>
                            <Typography variant="caption4" component="span" theme="primary">
                                <Link href="/connexion/inscription">Create One</Link>
                            </Typography>
                        </div>
                    </div>
                    <LoginForm form={form} />
                </Box>
            </div>
        </Container>
    );
}
