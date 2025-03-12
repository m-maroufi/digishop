import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
} from '@/components/ui';

import img1 from './image/img-1.webp';
import img2 from './image/img-2.webp';
import img3 from './image/img-3.webp';
import img4 from './image/img-4.webp';
import img5 from './image/img-5.webp';
import Image from 'next/image';

function Banner() {
  return (
    <Carousel className="max-w-full mt-20" dir="ltr">
      <CarouselContent>
        {[img1, img2, img3, img4, img5].map((img, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className="py-0">
                <CardContent className="relative h-[400px] w-full flex items-center justify-center">
                  <Image
                    src={img}
                    alt="banner image"
                    fill
                    quality={75}
                    priority={true}
                    className="object-cover h-full max-w-full rounded-2xl"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Banner;
