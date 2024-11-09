import React from 'react';
import Portfolio from '@/components/Portfolio';

export const metadata = {
  title: 'Our Portfolio - Your Site Name',
  description: 'View our work and projects',
}

export default function PortfolioPage() {
  return (
    <main>
      <Portfolio />
    </main>
  );
}
