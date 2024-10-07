import clsx from "clsx";
import Link from "next/link";

interface Props {
    href: string;
    children: React.ReactNode;
}

export const ActiveLink = ({ href, children }: Props) => {
    return (
        <Link href={href} className={clsx()}>
            {children}
        </Link>
    )
}