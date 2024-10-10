import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography";
import Link from "next/link";
import { RegisterForm } from "./register.form";
import { FormsType } from "@/types/forms";

interface Props {
    form: FormsType;
}
export const RegisterView = ({ form }: Props) => {
    return (
        <Container className="gap-20 mb-32 pt-40">
            <div className="flex items-center">
                <Box padding_y="py-5">
                    <div className="flex items-center justify-between">
                        <Typography variant="h5" component="h1">
                            Create An Account
                        </Typography>
                        <div className="flex items-center gap-2">
                            <Typography variant="caption4" component="span" theme="gray">
                                Already have an acount ?
                            </Typography>
                            <Typography variant="caption4" component="span" theme="primary">
                                <Link href="/connexion">Sign In</Link>
                            </Typography>
                        </div>
                    </div>
                    <RegisterForm form={form} />
                    <Typography variant="caption4" theme="gray" className="max-w-md mx-auto space-y-1 text-center">
                        <div>
                            By creating an account, you agree to our
                            <div>
                                <Link href="/#" className="text-gray">
                                    Terms of Service
                                </Link>
                                {" "}and{" "}
                                <Link href="/#" className="text-gray">
                                    Privacy Policy
                                </Link>
                                .
                            </div>
                        </div>

                    </Typography>
                </Box>
            </div>
        </Container>
    );
};