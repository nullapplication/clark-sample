import { ExternalPathString, Link, RelativePathString } from "expo-router";
import globalStyles from "@/app/styles";

import { ReactNode } from "react";

interface HeaderLinkProps {
  children: ReactNode;
  href: any;
}

export default function HeaderLink({ children, href }: HeaderLinkProps) {
  return (
    <Link href={href} style={globalStyles.darkBackgroundTextColor}>
      {children}
    </Link>
  );
}
