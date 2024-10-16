import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

export const ActiveLink = ({ href, children }: Props) => {
  const router = useRouter();

  console.log("router ::", router.pathname);
  console.log("href", href);

  const isActive: boolean = useMemo(() => {
        return router.pathname === href;
  }, [router.pathname, href])

  return (
      <Link href={href} className={clsx(isActive && "text-primary font-medium")}>
        {children}
      </Link>
    )
};
