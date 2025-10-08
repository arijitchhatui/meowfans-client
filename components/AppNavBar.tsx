'use client';

import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

const categories = ['Pictures', 'Videos', 'Top', 'Best', 'Trending', 'Newest', 'Popular', 'Favorites', 'AI Art', 'Nature', 'Portraits'];

export const AppNavBar = () => {
  const [active, setActive] = useState('Pictures');

  return (
    <div className="w-full bg-background border-b sticky top-13 z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <div className="flex-1 min-w-0">
          <ScrollArea className="md:hidden w-full">
            <div className="flex space-x-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={active === category ? 'default' : 'ghost'}
                  onClick={() => setActive(category)}
                  className={cn(
                    'rounded-full text-sm px-4 py-1 transition-all duration-200',
                    active === category ? 'bg-primary text-primary-foreground shadow-sm' : 'hover:bg-muted hover:text-foreground'
                  )}
                >
                  {category}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <div className="hidden md:flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={active === category ? 'default' : 'ghost'}
                onClick={() => setActive(category)}
                className={cn(
                  'rounded-full text-sm px-4 py-1 transition-all duration-200',
                  active === category ? 'bg-primary text-primary-foreground shadow-sm' : 'hover:bg-muted hover:text-foreground'
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <Button variant="outline" size="icon" className="ml-2 shrink-0 hover:bg-muted" aria-label="Filter">
          <SlidersHorizontal className="h-5 w-5" />
        </Button>
      </div>

      <Separator />
    </div>
  );
};
