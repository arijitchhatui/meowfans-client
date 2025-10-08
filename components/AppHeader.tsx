'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Icons } from '@/lib/icons/Icons';
import { cn } from '@/lib/utils';
import { redirectToAuthApp } from '@/util/helpers';
import { CircleUser, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Contents } from './Explore';
import { NavActions } from './NavActions';
import { ReturnToPreviousPage } from './ReturnToPreviousPage';

interface Props {
  contents?: Contents[];
  setHighLightedId?: React.Dispatch<React.SetStateAction<string | null>>;
  divRefs?: React.RefObject<Record<string, HTMLDivElement | null>>;
}

const AppHeader: React.FC<Props> = ({ contents, setHighLightedId, divRefs }) => {
  const router = useRouter();
  const [expanded, setExpanded] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');

  const handleRoute = (path: string) => router.push(redirectToAuthApp({ pathname: path }));

  const handlePushToSearchDirectory = () => {
    router.push(`/categories/${encodeURIComponent(searchText)}`);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-gradient-to-bl from-[var(--background)] to-[var(--background)]/80 backdrop-blur-md px-4 py-2',
        'flex flex-col w-full'
      )}
    >
      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex items-center gap-4 flex-shrink-0">
          <div
            className="flex items-center gap-2 cursor-pointer rounded-full hover:scale-105 transition-transform duration-200"
            onClick={() => router.push('/')}
          >
            <ReturnToPreviousPage applyReturn />
            {Icons.appIcon()}
            <h5 className="font-semibold text-base sm:text-lg text-white drop-shadow-[0_1px_5px_var(--accent-foreground)]">MEOWFANS</h5>
          </div>
          <div className="relative hidden md:flex w-64 lg:w-80">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search creators..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handlePushToSearchDirectory()}
              className="pl-8"
            />
          </div>
        </div>

        <div className="hidden md:hidden items-center gap-3 flex-wrap">
          <Button
            variant="outline"
            className="text-white bg-gradient-to-r from-blue-600 to-sky-400 hover:from-blue-700 hover:to-sky-500"
            onClick={() => handleRoute('/creator-signup')}
          >
            Become a Creator
          </Button>
          <Button variant="outline" onClick={() => handleRoute('/explore')}>
            Explore
          </Button>
          <Button variant="outline" onClick={() => handleRoute('/pricing')}>
            Pricing
          </Button>
          <Button variant="outline" onClick={() => handleRoute('/about')}>
            About
          </Button>
          <Button variant="outline" onClick={() => handleRoute('/login')}>
            Login
          </Button>
          <Button
            variant="default"
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600"
            onClick={() => handleRoute('/signup')}
          >
            Signup
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <Button size="icon" variant="outline" onClick={() => setExpanded((prev) => !prev)}>
            <Search className="h-5 w-5 text-muted-foreground" />
          </Button>

          {/* <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <CircleUser className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64 sm:w-80 bg-gradient-to-bl from-white to-slate-100 dark:from-black dark:to-neutral-900"
            >
              <SheetHeader className="flex flex-col items-center justify-center py-4 border-b border-border">
                <SheetTitle>MeowFans</SheetTitle>
                <SheetDescription className="flex items-center space-x-2">{Icons.appIcon()}</SheetDescription>
              </SheetHeader>

              <div className="flex flex-col mt-6 space-y-4">
                <Button variant="ghost" onClick={() => handleRoute('/creator-signup')}>
                  Become a Creator
                </Button>
                <Button variant="ghost" onClick={() => handleRoute('/explore')}>
                  Explore
                </Button>
                <Button variant="ghost" onClick={() => handleRoute('/pricing')}>
                  Pricing
                </Button>
                <Button variant="ghost" onClick={() => handleRoute('/about')}>
                  About
                </Button>
                <Button variant="outline" onClick={() => handleRoute('/login')}>
                  Login
                </Button>
                <Button
                  variant="default"
                  className="bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                  onClick={() => handleRoute('/signup')}
                >
                  Signup
                </Button>
              </div>
            </SheetContent>
          </Sheet> */}

          {/* <NavActions /> */}
        </div>
      </div>

      {expanded && (
        <div className="w-full mt-2 md:hidden relative flex flex-row space-x-2">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search creators..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-8 w-full"
            onKeyDown={(e) => e.key === 'Enter' && handlePushToSearchDirectory()}
          />
          <Button onClick={handlePushToSearchDirectory}>Search</Button>
        </div>
      )}
    </header>
  );
};

export default AppHeader;
