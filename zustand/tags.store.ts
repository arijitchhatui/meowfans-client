import { TagsEntity } from '@/packages/gql/generated/graphql';
import { create } from 'zustand';

type TagsStore = {
  tags: TagsEntity[];
  setTags: (tags: TagsEntity[]) => void;
};

export const useTagsStore = create<TagsStore>()((set) => ({
  setTags: (tags: TagsEntity[]) => set({ tags }),
  tags: []
}));
