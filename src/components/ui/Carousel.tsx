'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/motion-primitives/carousel';
import Image from 'next/image';
import { useState } from 'react';

type CarouselCustomIndicatorProps = {
  items: string[];
};

export function CarouselCustomIndicator({ items }: CarouselCustomIndicatorProps) {
  const [index, setIndex] = useState(0);

  return (
    <div className='relative w-full'>
      <Carousel index={index} onIndexChange={setIndex}>
        <CarouselContent className='relative'>
          {items.map((item, itemIndex) => {
            return (
              <CarouselItem key={itemIndex} >
                <div className='relative w-full h-96 overflow-hidden border border-zinc-200 dark:border-zinc-800'>
                  <Image
                    src={item}
                    alt={`Slide ${itemIndex + 1}`}
                    height={500}
                    width={600}
                    draggable={false}
                    onDragStart={(event) => event.preventDefault()}
                    className='object-right border-2 border-red-600 select-none'
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <div className='flex w-full justify-center space-x-3 px-4'>
        {items.map((item, itemIndex) => {
          return (
            <button
              key={itemIndex}
              type='button'
              aria-label={`Go to slide ${itemIndex + 1}`}
              onClick={() => setIndex(itemIndex)}
              className={`relative h-12 w-12 overflow-hidden border dark:border-zinc-800 ${index === itemIndex
                ? 'border-zinc-900 dark:border-zinc-100'
                : 'border-zinc-200'
                }`}
            >
              <Image
                src={item}
                alt={`Miniatura ${itemIndex + 1}`}
                fill
                draggable={false}
                onDragStart={(event) => event.preventDefault()}
                className='object-cover select-none'
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
