import React from 'react';
import Blog from '@/components/Blog';

export const metadata = {
  title: 'Our Blog - Your Site Name',
  description: 'Read our latest articles and insights',
}

export default function BlogPage() {
  return (
    <main>
      <Blog />
    </main>
  );
}
