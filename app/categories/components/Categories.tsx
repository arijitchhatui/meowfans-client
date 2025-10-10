'use client';

import { InfiniteScrollWrapper } from '@/components/InfiniteScrollWrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTags } from '@/hooks/useTags';
import { TagsEntity } from '@/packages/gql/generated/graphql';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { ArrowBigUp } from 'lucide-react';
import { useMemo, useRef } from 'react';

export const Categories = () => {
  const { handleLoadMore, hasMore, loading, tags } = useTags();
  const topRef = useRef<HTMLDivElement>(null);

  const groupedTags = useMemo(() => {
    const groups: Record<string, TagsEntity[]> = {};
    tags.forEach((tag) => {
      const firstLetter = tag.label[0].toUpperCase() ?? '#';
      const alphaKey = /^[A-Z]$/.test(firstLetter) ? firstLetter : '#';
      groups[alphaKey] ??= [];
      groups[alphaKey].push(tag);
    });
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [tags]);

  return (
    <PageWrapper className="p-2">
      <InfiniteScrollWrapper dataLength={tags.length} onLoadMore={handleLoadMore} hasMore={hasMore} loading={loading}>
        <div ref={topRef} />
        <div className="container relative mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Categories</h1>
          {groupedTags.map(([alphabetKey, tags]) => (
            <div key={alphabetKey} className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{alphabetKey}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
                {tags.map((tag) => (
                  <Badge
                    key={tag.id}
                    variant="secondary"
                    className="flex justify-center py-2 text-sm cursor-pointer hover:bg-secondary/80 transition"
                  >
                    {tag.label}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </InfiniteScrollWrapper>
      <div className="fixed bottom-20 right-5 rounded-2xl">
        <Button
          className="rounded-2xl"
          onClick={() => {
            requestAnimationFrame(() => {
              topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
          }}
        >
          <ArrowBigUp />
        </Button>
      </div>
    </PageWrapper>
  );
};
