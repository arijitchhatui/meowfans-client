'use client';
import Loading from '@/app/loading';
import { Paginate } from '@/components/Paginate';
import { SAvatar } from '@/components/SAvatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useCreators } from '@/hooks/useCreators';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { BadgeCheckIcon, Heart, MoreVertical } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export const CreatorProfiles = () => {
  const searchParams = useSearchParams();
  const [pageNumber, setPageNumber] = useState<number>(Number(searchParams.get('p') || 1));
  const { creators, hasNext, hasPrev, totalPages, loading } = useCreators({ pageNumber });

  if (loading) return <Loading />;
  return (
    <PageWrapper>
      <h2 className="text-xl font-semibold m-3">Explore Creators</h2>
      <div className="relative h-full">
        <ScrollArea className="w-full p-1">
          <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
            {creators.map((creator) => (
              <div key={creator.id} className="group flex flex-col items-center text-center">
                <Link href={`/creators/${creator.username}`} className="w-full relative overflow-hidden rounded-xs">
                  <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600 absolute top-2 right-1">
                    <BadgeCheckIcon />
                    {creator.username}
                  </Badge>
                  <button type="button" className="absolute bottom-8 right-0 hover:text-red-500 transition" title="Like">
                    <Heart className="w-5 h-5" />
                  </button>
                  <SAvatar url={creator.avatarUrl} className="absolute bottom-0 left-0" />
                  <div
                    className="aspect-square bg-cover bg-center rounded-xs"
                    style={{ backgroundImage: `url(${creator.bannerUrl || '/meowfans_banner.png'})` }}
                  />
                  <button type="button" className="hover:text-gray-800 transition absolute bottom-0 right-0" title="Menu">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </ScrollArea>
        <Paginate hasNext={hasNext} hasPrev={hasPrev} pageNumber={pageNumber} totalPages={totalPages} setPageNumber={setPageNumber} />
      </div>
    </PageWrapper>
  );
};
