import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography";
import Link from "next/link";
import { LoginForm } from "./login-form";
import { FormsType } from "@/types/forms";
import Image from "next/image";

interface Props {
    form: FormsType;
}

export const LoginView = ({form}: Props) => {
    return (
        <Container className="grid grid-cols-2 mb-32 mt-32 gap-6">
            <div className="flex items-center">
                {/* rajout image */}
                <div className="relative w-full h-full">
                    <Image
                        fill
                        src="/assets/images/femme_treaking.jpg"
                        alt="login"
                        objectFit="cover" // Utilisez objectFit pour conserver les proportions
                        className="object-contain rounded" />
                </div>
            </div>
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
                    <Typography variant="caption4" theme="primary">
                        <Link href="/connexion/mots-de-passe-perdu" className="flex justify-center">
                        Forgot Password ?
                        </Link>
                        </Typography>
                </Box>
            </div>
        </Container>
    );
}
