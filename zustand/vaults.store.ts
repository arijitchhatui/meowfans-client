import { VaultObjectsEntity, VaultsEntity } from '@/packages/gql/generated/graphql';
import { create } from 'zustand';

type VaultsStore = {
  vaults: VaultsEntity[];
  vaultObjects: VaultObjectsEntity[];
  setVaults: (vaults: VaultsEntity[]) => void;
  setVaultObjects: (vaultObjects: VaultObjectsEntity[]) => void;
};

export const useVaultsStore = create<VaultsStore>()((set) => ({
  vaults: [],
  vaultObjects: [],
  setVaults: (vaults: VaultsEntity[]) => set({ vaults }),
  setVaultObjects: (vaultObjects: VaultObjectsEntity[]) => set({ vaultObjects })
}));
