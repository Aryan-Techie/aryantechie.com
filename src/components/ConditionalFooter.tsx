'use client';

import { usePathname } from 'next/navigation';
import { Footer } from './Footer';
import { Footer2 } from './Footer2';

export const ConditionalFooter = () => {
  const pathname = usePathname();
  
  // Use Footer (full footer) only on home page
  // Use Footer2 (simple footer) on all other pages
  const isHomePage = pathname === '/';
  
  return isHomePage ? <Footer /> : <Footer2 />;
};
