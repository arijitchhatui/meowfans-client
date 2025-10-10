import { GET_DEFAULT_ASSETS, GET_DEFAULT_CREATOR_ASSETS_QUERY } from '@/packages/gql/api/assetsAPI';
import { CreatorAssetsEntity, GetDefaultAssetsOutput } from '@/packages/gql/generated/graphql';
import { useAssetsStore } from '@/zustand/assets.store';
import { CombinedGraphQLErrors } from '@apollo/client';
import { useLazyQuery, useQuery } from '@apollo/client/react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface UseAssetsProps {
  pageNumber?: number;
  username?: string;
}

export const useAssets = ({ pageNumber }: UseAssetsProps) => {
  const { data, loading } = useQuery(GET_DEFAULT_ASSETS, { variables: { input: { pageNumber } } });
  const { assets, setAssets } = useAssetsStore();
  const { count = 0, hasNext = false, hasPrev = false, totalPages = 0 } = (data?.getDefaultAssets ?? {}) as GetDefaultAssetsOutput;
  useEffect(() => {
    if (data?.getDefaultAssets.assets) {
      setAssets(data.getDefaultAssets.assets as CreatorAssetsEntity[]);
    }
  }, [data]);
  return { assets, hasNext, hasPrev, totalPages, count, loading };
};

export const useCreatorAssets = ({ username }: UseAssetsProps) => {
  const { assets, setAssets } = useAssetsStore();
  const [getCreatorAssets] = useLazyQuery(GET_DEFAULT_CREATOR_ASSETS_QUERY);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(false);

  const handleLoadMoreAssets = async (initialLoad = false) => {
    const offset = initialLoad ? 0 : assets.length;
    try {
      const { data } = await getCreatorAssets({ variables: { input: { limit: 30, offset, relatedUserId: username } } });

      const fetchedAssets = (data?.getDefaultCreatorAssets ?? []) as CreatorAssetsEntity[];
      setHasMore(fetchedAssets.length === 30);

      if (initialLoad) setAssets(fetchedAssets);
      else setAssets([...assets, ...fetchedAssets]);
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
    if (!loading && hasMore) handleLoadMoreAssets();
  };

  useEffect(() => {
    handleLoadMoreAssets(true);
  }, []);

  return { assets, handleLoadMore, loading, hasMore };
};
