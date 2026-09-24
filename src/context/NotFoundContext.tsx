'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface LayoutContextType {
  isNotFound: boolean;
  setIsNotFound: (val: boolean) => void;
  hideHeader: boolean;
  setHideHeader: (val: boolean) => void;
  hideFooter: boolean;
  setHideFooter: (val: boolean) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function NotFoundProvider({ children }: { children: ReactNode }) {
  const [isNotFound, setIsNotFound] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);

  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);


  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsNotFound(false);
    setHideHeader(false);
    setHideFooter(false);
  }

  return (
    <LayoutContext.Provider 
      value={{ 
        isNotFound, setIsNotFound, 
        hideHeader, setHideHeader, 
        hideFooter, setHideFooter 
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export function useNotFound() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useNotFound must be used within a NotFoundProvider");
  }
  return context;
}