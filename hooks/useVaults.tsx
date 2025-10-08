import { GET_DEFAULT_VAULTS_QUERY, GET_VAULT_OBJECTS_BY_VAULT_ID_QUERY } from '@/packages/gql/api/vaultsAPI';
import {
  GetDefaultVaultObjectsOutput,
  GetDefaultVaultsOutput,
  SortOrder,
  VaultObjectsEntity,
  VaultsEntity
} from '@/packages/gql/generated/graphql';
import { useVaultsStore } from '@/zustand/vaults.store';
import { useQuery } from '@apollo/client/react';
import { useEffect } from 'react';

interface VaultProps {
  pageNumber: number;
  searchTerm?: string;
}

interface VaultObjectProps extends VaultProps {
  vaultId: string;
}

export const useVaults = ({ pageNumber, searchTerm }: VaultProps) => {
  const { data, loading } = useQuery(GET_DEFAULT_VAULTS_QUERY, { variables: { input: { pageNumber, searchTerm } } });
  const { vaults, setVaults } = useVaultsStore();
  const { count = 0, hasNext = false, hasPrev = false, totalPages = 0 } = (data?.getDefaultVaults ?? {}) as GetDefaultVaultsOutput;

  useEffect(() => {
    if (data?.getDefaultVaults.vaults) {
      setVaults(data.getDefaultVaults.vaults as VaultsEntity[]);
    }
  }, [data]);

  return { count, hasNext, hasPrev, totalPages, vaults, loading };
};

export const useVaultObjects = ({ pageNumber, vaultId }: VaultObjectProps) => {
  const { data } = useQuery(GET_VAULT_OBJECTS_BY_VAULT_ID_QUERY, {
    variables: { input: { pageNumber, relatedEntityId: vaultId, orderBy: SortOrder.Asc } }
  });
  const { setVaultObjects, vaultObjects } = useVaultsStore();
  const {
    count = 0,
    hasNext = false,
    hasPrev = false,
    totalPages = 0,
    vault = {} as VaultsEntity
  } = (data?.getVaultObjectsByVaultId ?? {}) as GetDefaultVaultObjectsOutput;

  useEffect(() => {
    if (data?.getVaultObjectsByVaultId.vaultObjects) {
      setVaultObjects(data.getVaultObjectsByVaultId.vaultObjects as VaultObjectsEntity[]);
    }
  }, [data]);

  return { count, hasNext, hasPrev, totalPages, vaultObjects, vault };
};
