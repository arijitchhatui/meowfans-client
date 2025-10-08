import { GET_DEFAULT_ASSETS } from '@/packages/gql/api/assetsAPI';
import { CreatorAssetsEntity, GetDefaultAssetsOutput } from '@/packages/gql/generated/graphql';
import { useAssetsStore } from '@/zustand/assets.store';
import { useQuery } from '@apollo/client/react';
import { useEffect } from 'react';

interface UseAssetsProps {
  pageNumber: number;
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
