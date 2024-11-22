import React from 'react';
import { Ropa_Sans, Poppins} from 'next/font/google';
import Footer from '@/components/Footer';
import "@/app/main.css";
 
const ropaSans = Ropa_Sans({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  });
  
  const poppins = Poppins({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    display: 'swap',
  });
  
export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return (
  <html lang="en">
   <body className={`${ropaSans.className} ${poppins.className}`}>
    {/* <Header /> */}
    <main>{children}</main>
    <Footer />
   </body>
  </html>
 );
}
