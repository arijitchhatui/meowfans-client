'use client';
import { InfiniteScrollWrapper } from '@/components/InfiniteScrollWrapper';
import { SAvatar } from '@/components/SAvatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useCreators } from '@/hooks/useCreators';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { BadgeCheckIcon, Heart, MoreVertical } from 'lucide-react';
import Link from 'next/link';

export const CreatorProfiles = () => {
  const { creators, handleLoadMore, hasMore, loading } = useCreators();

  return (
    <PageWrapper>
      <h2 className="text-xl font-semibold m-3">Explore Vaults</h2>
      <InfiniteScrollWrapper dataLength={creators.length} hasMore={hasMore} loading={loading} onLoadMore={handleLoadMore}>
        <div className="relative h-full">
          <ScrollArea className="w-full p-2">
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
              {creators.map((creator) => (
                <div
                  key={creator.id}
                  className="group relative flex flex-col items-center text-center rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Link href={`/creators/${creator.username}`} className="w-full relative overflow-hidden rounded-xs">
                    <div
                      className="aspect-square bg-cover bg-center rounded-xs"
                      style={{ backgroundImage: `url(${creator.bannerUrl || '/meowfans_banner.png'})` }}
                    />

                    <div className="absolute top-2 right-2 flex gap-1">
                      <Badge
                        variant="secondary"
                        className="bg-blue-500 text-white dark:bg-blue-600 flex items-center gap-1 text-xs px-2 py-1"
                      >
                        <BadgeCheckIcon className="w-3 h-3" />
                        {creator.username}
                      </Badge>
                    </div>

                    <button type="button" className="absolute bottom-3 right-3 text-white hover:text-red-500 transition" title="Like">
                      <Heart className="w-5 h-5" />
                    </button>

                    <button type="button" className="absolute top-2 left-2 text-white hover:text-gray-300 transition" title="Menu">
                      <MoreVertical className="w-5 h-5" />
                    </button>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                      <SAvatar url={creator.avatarUrl} className="w-12 h-12 border-2 border-background rounded-full" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </InfiniteScrollWrapper>
    </PageWrapper>
  );
};
