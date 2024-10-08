import React from 'react';
import Header from '@/components/Header';
import FloatingButton from '@/components/FloatingButton';

export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return (
  <html lang="en">
   <body>
    <Header />
    {children}
    <FloatingButton />
   </body>
  </html>
 );
}
