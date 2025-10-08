'use client';

import { Paginate } from '@/components/Paginate';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useVaultObjects } from '@/hooks/useVaults';
import { PageWrapper } from '@/wrappers/PageWrapper';
import Link from 'next/link';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

type TabProps = 'gallery' | 'vault' | 'about';

export const VaultObjects = () => {
  const { id } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [expanded, setExpanded] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(Number(searchParams.get('p') || 1));
  const [currentTab, setCurrentTab] = useState<TabProps>((searchParams.get('tab') as TabProps) || 'gallery');
  const { vaultObjects, hasNext, hasPrev, totalPages, vault } = useVaultObjects({ pageNumber, vaultId: id as string });

  const handleTabChange = (tab: TabProps) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', tab);
    router.push(`?${params.toString()}`, { scroll: false });
    setCurrentTab(tab);
  };

  return (
    <PageWrapper className="p-3">
      <div className="flex flex-wrap gap-6 mb-10">
        <div
          className="h-28 w-28 rounded-full bg-gradient-to-tr from-pink-300 to-yellow-300 dark:from-zinc-600 dark:to-zinc-700"
          style={{
            WebkitUserSelect: 'none',
            userSelect: 'none',
            backgroundImage: `url(${vault.preview})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            aspectRatio: '1/1'
          }}
        />
        <div>
          <h1
            className={`text-xs md:text-xl text-ellipsis ${expanded ? 'line-clamp-none' : 'line-clamp-3'}`}
            onClick={() => setExpanded((prev) => !prev)}
          >
            {vault.description}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Hot bitch is capturing moments, sharing creativity ✨</p>
          <div className="mt-4 flex gap-2">
            <Button>Follow</Button>
            <Button variant="outline">Subscribe</Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue={currentTab} onValueChange={(val) => handleTabChange(val as TabProps)}>
        <TabsList>
          <TabsTrigger value={'gallery'}>Gallery</TabsTrigger>
          <TabsTrigger value={'vault'}>Vault</TabsTrigger>
          <TabsTrigger value={'about'}>About</TabsTrigger>
        </TabsList>
        <TabsContent value="gallery" className="mt-3">
          <ScrollArea className="w-full m-1">
            <div className="grid gap-1 md:grid-cols-4 grid-cols-1 w-full h-full mt-2">
              {vaultObjects.map((vaultObject, idx) => (
                <div
                  key={idx}
                  className={`aspect-square rounded-xs bg-cover bg-center h-fit w-full bg-no-repeat p-0 m-0`}
                  style={{
                    WebkitUserSelect: 'none',
                    userSelect: 'none',
                    backgroundImage: `url(${vaultObject.asset?.rawUrl || '/meowfans_avatar.png'})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    aspectRatio: '1/1'
                  }}
                />
              ))}
            </div>
          </ScrollArea>
          {totalPages !== 1 && (
            <Paginate hasNext={hasNext} hasPrev={hasPrev} pageNumber={pageNumber} totalPages={totalPages} setPageNumber={setPageNumber} />
          )}
        </TabsContent>

        <TabsContent value="vault" className="mt-6 text-center text-gray-500">
          🔒 This vault contains exclusive content.
        </TabsContent>

        <TabsContent value="about" className="mt-6">
          <p>{vault.description}</p>
          {vault.keywords?.map((tag, idx) => (
            <Link key={idx} href={`/categories/${encodeURIComponent(tag.trim())}`} className="mx-1">
              <Badge variant="secondary" className="gap-1">
                {tag.trim()}
              </Badge>
            </Link>
          ))}
        </TabsContent>
      </Tabs>
    </PageWrapper>
  );
};
