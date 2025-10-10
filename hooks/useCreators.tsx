import { GET_DEFAULT_CREATORS_QUERY } from '@/packages/gql/api/userAPI';
import { DataFetchType, ExtendedUsersEntity } from '@/packages/gql/generated/graphql';
import { useCreatorsStore } from '@/zustand/users.store';
import { CombinedGraphQLErrors } from '@apollo/client';
import { useLazyQuery } from '@apollo/client/react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const useCreators = () => {
  const [getDefaultCreatorsQuery] = useLazyQuery(GET_DEFAULT_CREATORS_QUERY);
  const { creators, setCreators } = useCreatorsStore();
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoadMoreCreators = async (initialLoad = false) => {
    const offset = initialLoad ? 0 : creators.length;
    try {
      const { data } = await getDefaultCreatorsQuery({
        variables: { input: { take: 30, skip: offset, dataFetchType: DataFetchType.InfiniteScroll } }
      });
      const fetchedCreators = data?.getDefaultCreators.creators ?? [];
      setHasMore(fetchedCreators.length === 30);

      if (initialLoad) setCreators(fetchedCreators as ExtendedUsersEntity[]);
      else setCreators([...creators, ...fetchedCreators] as ExtendedUsersEntity[]);
      setLoading(false);
    } catch (error) {
      if (error.name === 'AbortError') {
        return;
      } else if (error instanceof CombinedGraphQLErrors) {
        console.log('GraphQL errors:', error.errors);
      } else {
        console.error('Other error:', error);
      }
      toast.error('Something wrong happened!!');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (!loading && hasMore) handleLoadMoreCreators();
  };

  useEffect(() => {
    handleLoadMoreCreators(true);
  }, []);

  return { creators, loading, hasMore, handleLoadMore };
};
