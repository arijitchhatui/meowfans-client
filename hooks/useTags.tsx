import { GET_TAGS_QUERY } from '@/packages/gql/api/tagsAPI';
import { SortOrder } from '@/packages/gql/generated/graphql';
import { useTagsStore } from '@/zustand/tags.store';
import { CombinedGraphQLErrors } from '@apollo/client';
import { useLazyQuery } from '@apollo/client/react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const useTags = () => {
  const LIMIT = 300;
  const [getTags] = useLazyQuery(GET_TAGS_QUERY);
  const { tags, setTags } = useTagsStore();
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(false);

  const handleLoadMoreTags = async (initialLoad = false) => {
    const offset = initialLoad ? 0 : tags.length;
    try {
      const { data } = await getTags({
        variables: { input: { limit: LIMIT, orderBy: SortOrder.Asc, offset } }
      });

      const fetchedTags = data?.getTags ?? [];
      setHasMore(fetchedTags.length === LIMIT);

      if (initialLoad) {
        setTags(fetchedTags);
      } else {
        setTags([...tags, ...fetchedTags]);
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        return;
      } else if (error instanceof CombinedGraphQLErrors) {
        console.log('GraphQL errors:', error.errors);
      } else {
        console.error('Other error:', error);
      }
      toast.error('Some wrong happened!!');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (hasMore && !loading) handleLoadMoreTags();
  };

  useEffect(() => {
    handleLoadMoreTags(true);
  }, []);

  return { tags, handleLoadMore, hasMore, loading };
};
