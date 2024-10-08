'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';
import { Dribbble } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About</h1>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="https://exwpcoder.com/rxcreative/wp-content/uploads/2023/11/011.png"
            alt="About Me"
            width={600}
            height={610}
            className="rounded-lg"
          />
        </div>
        
        <div>
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <h3 className="text-2xl font-bold mb-4">I'm Creative Web Developer</h3>
          <p className="text-gray-600 mb-6">
            Sed pretium arcu rhoncus risus aliquet, at scelerisque diam commodo. Nam nec egestas ante. Duis pulvinar tincidunt sem et aliquam. Vivamus ut vehicula erat. Duis hendrerit velit non malesuada posuere.
          </p>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <h4 className="text-3xl font-bold">100+</h4>
                <p className="text-sm text-gray-500">PROJECTS DONE</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <h4 className="text-3xl font-bold">110+</h4>
                <p className="text-sm text-gray-500">Total Buyer</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <h4 className="text-3xl font-bold">200+</h4>
                <p className="text-sm text-gray-500">Buyer Review</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button>Hire me</Button>
            <Separator orientation="vertical" className="h-8" />
            <div className="flex space-x-2">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Dribbble size={24} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                {/* <WhatsApp size={24} /> */}
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                {/* <Pinterest size={24} /> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}