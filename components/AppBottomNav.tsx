'use client';

import { useIsMobile } from '@/hooks/useIsMobile';
import { appBottomNavButtonOptions } from '@/lib/constants';
import Link from 'next/link';
import { Button } from './ui/button';

export const AppBottomNav = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <div className="w-full bg-white dark:bg-black fixed bottom-0 h-16 z-50">
      <div className="flex flex-row justify-between items-center content-center p-1">
        {appBottomNavButtonOptions.map((button, idx) => (
          <Link href={button.path} key={idx}>
            <Button className="flex flex-col items-center content-center rounded-xl shadow-accent-foreground" variant={'outline'}>
              <button.icon />
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};
