"use client";

import type { ReactNode } from "react";

import Header from "../common/Header/Header";
import Footer from "../common/Footer/page";
import { NotFoundProvider, useNotFound } from "@/context/NotFoundContext";

interface ClientLayoutProps {
  children: ReactNode;
}

function LayoutContent({ children }: ClientLayoutProps) {
  const { isNotFound, hideHeader, hideFooter } = useNotFound();
  const shouldHideHeader = isNotFound || hideHeader;
  const shouldHideFooter = isNotFound || hideFooter;  
  
return(
<>
{!shouldHideHeader && <Header />}
<main>{children}</main>
{!shouldHideFooter && <Footer />}
</>
);
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <NotFoundProvider>
      <LayoutContent>{children}</LayoutContent>
    </NotFoundProvider>
  );
}