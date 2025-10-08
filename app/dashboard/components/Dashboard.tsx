'use client';

import Loading from '@/app/loading';
import { Paginate } from '@/components/Paginate';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useVaults } from '@/hooks/useVaults';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { Heart, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export const Dashboard = () => {
  const searchParams = useSearchParams();
  const [pageNumber, setPageNumber] = useState<number>(Number(searchParams.get('p') || 1));
  const { vaults, hasNext, hasPrev, totalPages, loading } = useVaults({ pageNumber });

  if (loading) return <Loading />;
  return (
    <PageWrapper className="m-1">
      <h2 className="text-xl font-semibold m-3">Explore dashboard</h2>
      <div className="relative h-full">
        <ScrollArea className="w-full p-1">
          <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
            {vaults.map((vault) => (
              <div key={vault.id} className="group flex flex-col items-center text-center">
                <Link href={`/vaults/${vault.id}`} className="w-full relative overflow-hidden rounded-xs">
                  <button type="button" className="text-gray-500 absolute top-5 right-5 hover:text-red-500 transition" title="Like">
                    <Heart className="w-5 h-5" />
                  </button>
                  <div
                    className="aspect-square bg-cover bg-center rounded-xs"
                    style={{ backgroundImage: `url(${vault.preview || '/meowfans_banner.png'})` }}
                  />
                </Link>

                <div className="flex flex-col justify-between w-full mt-2">
                  <p className="truncate max-w-[266px] text-xs md:text-base">{vault.description}</p>
                  <div className="flex items-center justify-center gap-4 mt-1">
                    <button type="button" className="text-gray-500 hover:text-gray-800 transition" title="Menu">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <Paginate hasNext={hasNext} hasPrev={hasPrev} pageNumber={pageNumber} totalPages={totalPages} setPageNumber={setPageNumber} />
      </div>
    </PageWrapper>
  );
};
