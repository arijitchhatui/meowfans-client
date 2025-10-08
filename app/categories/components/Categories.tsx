'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GET_TAGS_QUERY } from '@/packages/gql/api/tagsAPI';
import { SortOrder, TagsEntity } from '@/packages/gql/generated/graphql';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { useQuery } from '@apollo/client/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const Categories = () => {
  const LIMIT = 300;
  const { data, fetchMore } = useQuery(GET_TAGS_QUERY, { variables: { input: { limit: LIMIT, orderBy: SortOrder.Asc, offset: 0 } } });
  const [tags, setTags] = useState<TagsEntity[]>((data?.getTags ?? []) as TagsEntity[]);

  useEffect(() => {
    if (data?.getTags) {
      setTags(data.getTags);
    }
  }, [data]);

  const handleLoadMore = async () => {
    try {
      const { data: newData } = await fetchMore({
        query: GET_TAGS_QUERY,
        variables: { input: { limit: LIMIT, offset: data?.getTags.length, orderBy: SortOrder.Asc } }
      });
      setTags((prev) => [...prev, ...(newData?.getTags ?? [])]);
    } catch (error) {
      toast.error('Something wrong happened!');
    }
  };

  // const memoizedTags = useMemo(() => {
  //   return Object.entries(
  //     tags.reduce<Record<string, TagsEntity[]>>((acc, tag) => {
  //       const alphabetKey = tag.label[0].toUpperCase();
  //       acc[alphabetKey] ??= [];
  //       acc[alphabetKey].push(tag);
  //       return acc;
  //     }, {})
  //   );
  // }, [tags]);

  return (
    <PageWrapper className="p-2">
      <div className="flex flex-1 overflow-y-scroll h-screen" id="scroll-id">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Categories</h1>
          <div className="mb-8">
            {/* {memoizedTags.map(([alphabetKey, tags]) => (
              <h2 className="text-xl font-semibold mb-4">{alphabetKey}</h2> */}
            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {tags.map((tag) => (
                <Link key={tag.id} href={`/categories/${encodeURIComponent(tag.label)}`}>
                  <Badge variant="secondary" className="">
                    {tag.label}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
          {/* ))} */}
          <div className="flex justify-center content-center">
            <Button onClick={handleLoadMore}>Next</Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
