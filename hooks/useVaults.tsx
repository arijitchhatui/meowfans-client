import { GET_DEFAULT_VAULTS_QUERY, GET_VAULT_OBJECTS_BY_VAULT_ID_QUERY } from '@/packages/gql/api/vaultsAPI';
import { DataFetchType, SortOrder, VaultObjectsEntity, VaultsEntity } from '@/packages/gql/generated/graphql';
import { useVaultsStore } from '@/zustand/vaults.store';
import { CombinedGraphQLErrors } from '@apollo/client';
import { useLazyQuery } from '@apollo/client/react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface VaultProps {
  searchTerm?: string;
}

interface VaultObjectProps extends VaultProps {
  vaultId: string;
}

export const useVaults = ({ searchTerm }: VaultProps) => {
  const [getDefaultVaultsQuery] = useLazyQuery(GET_DEFAULT_VAULTS_QUERY);
  const { vaults, setVaults } = useVaultsStore();
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoadMoreVaults = async (initialLoad = false) => {
    const offset = initialLoad ? 0 : vaults.length;
    try {
      const { data } = await getDefaultVaultsQuery({
        variables: { input: { take: 30, skip: offset, searchTerm, dataFetchType: DataFetchType.InfiniteScroll } }
      });
      const fetchedVaults = (data?.getDefaultVaults.vaults ?? []) as VaultsEntity[];
      setHasMore(fetchedVaults.length === 30);

      if (initialLoad) setVaults(fetchedVaults);
      else setVaults([...vaults, ...fetchedVaults]);
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
    if (!loading && hasMore) handleLoadMoreVaults();
  };

  useEffect(() => {
    handleLoadMoreVaults(true);
  }, []);

  return { vaults, loading, hasMore, handleLoadMore };
};

export const useVaultObjects = ({ vaultId }: VaultObjectProps) => {
  const { setVaultObjects, vaultObjects } = useVaultsStore();
  const [getDefaultVaultObjectsByVaultId] = useLazyQuery(GET_VAULT_OBJECTS_BY_VAULT_ID_QUERY);
  const [vault, setVault] = useState<VaultsEntity>();
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoadMoreVaultObjects = async (initialLoad = false) => {
    const offset = initialLoad ? 0 : vaultObjects.length;
    try {
      const { data } = await getDefaultVaultObjectsByVaultId({
        variables: {
          input: { take: 30, skip: offset, relatedEntityId: vaultId, dataFetchType: DataFetchType.InfiniteScroll, orderBy: SortOrder.Asc }
        }
      });

      const fetchedVaultObjects = data?.getVaultObjectsByVaultId.vaultObjects ?? [];
      setHasMore(fetchedVaultObjects.length === 30);

      setVault((data?.getVaultObjectsByVaultId.vault ?? {}) as VaultsEntity);

      if (initialLoad) setVaultObjects(fetchedVaultObjects as VaultObjectsEntity[]);
      else setVaultObjects([...vaultObjects, ...fetchedVaultObjects] as VaultObjectsEntity[]);
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
    if (!loading && hasMore) handleLoadMoreVaultObjects();
  };

  useEffect(() => {
    handleLoadMoreVaultObjects(true);
  }, []);

  return { vaultObjects, loading, hasMore, handleLoadMore, vault };
};
