import { CreatorAssetsEntity } from '@/packages/gql/generated/graphql';
import { create } from 'zustand';

type AssetsStore = {
  assets: CreatorAssetsEntity[];
  setAssets: (assets: CreatorAssetsEntity[]) => void;
};

export const useAssetsStore = create<AssetsStore>()((set) => ({
  assets: [],
  setAssets: (assets: CreatorAssetsEntity[]) => set({ assets })
}));
