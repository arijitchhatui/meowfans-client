'use client';

import { InfiniteScrollWrapper } from '@/components/InfiniteScrollWrapper';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCreatorAssets } from '@/hooks/useAssets';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface Props {
  username: string;
}
type TabProps = 'gallery' | 'vault' | 'about';

export const CreatorProfile: React.FC<Props> = ({ username }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState<TabProps>((searchParams.get('tab') as TabProps) || 'gallery');
  const { assets, handleLoadMore, hasMore, loading } = useCreatorAssets({ username });

  const handleTabChange = (tab: TabProps) => {
    const params = new URLSearchParams(String(searchParams));
    params.set('tab', tab);
    router.push(`?${String(params)}`, { scroll: false });
    setCurrentTab(tab);
  };

  return (
    <PageWrapper>
      <InfiniteScrollWrapper dataLength={assets.length} hasMore={hasMore} loading={loading} onLoadMore={handleLoadMore}>
        <div className="flex items-center gap-6 mb-10">
          <div
            className="h-28 w-28 rounded-full bg-gradient-to-tr from-pink-300 to-yellow-300 dark:from-zinc-600 dark:to-zinc-700"
            style={{
              WebkitUserSelect: 'none',
              userSelect: 'none',
              backgroundImage: `url(${assets.at(0)?.asset.rawUrl || '/meowfans_avatar.png'})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              aspectRatio: '1/1'
            }}
          />
          <div>
            <h1 className="text-xs md:text-xl">@{assets.at(0)?.creatorProfile.user.username || 'username'}</h1>
            <p className="text-gray-600 dark:text-gray-400">Capturing moments, sharing creativity ✨</p>
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

          <TabsContent value="gallery" className="grid gap-2 md:grid-cols-3 mt-6">
            {assets.map((asset) => (
              <div
                key={asset.assetId}
                className={`aspect-square rounded-xs bg-cover bg-center bg-no-repeat`}
                style={{
                  backgroundImage: `url(${asset.asset.rawUrl || '/meowfans_banner.png'})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  aspectRatio: '1/1'
                }}
              />
            ))}
            <div
              className={`aspect-square rounded-xl bg-cover bg-center bg-no-repeat`}
              style={{
                backgroundImage: `url(${'/meowfans_banner.png'})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                aspectRatio: '1/1'
              }}
            />
          </TabsContent>

          <TabsContent value="vault" className="mt-6 text-center text-gray-500">
            🔒 This vault contains exclusive content.
          </TabsContent>

          <TabsContent value="about" className="mt-6">
            <p>This is the about section. Creator bio, socials, and more background details here.</p>
          </TabsContent>
        </Tabs>
      </InfiniteScrollWrapper>
    </PageWrapper>
  );
};
