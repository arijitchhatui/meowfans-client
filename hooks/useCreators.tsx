import { GET_DEFAULT_CREATORS_QUERY } from '@/packages/gql/api/userAPI';
import { ExtendedUsersEntity, GetAllCreatorsOutput } from '@/packages/gql/generated/graphql';
import { useCreatorsStore } from '@/zustand/users.store';
import { useQuery } from '@apollo/client/react';
import { useEffect } from 'react';

interface UseCreatorsProps {
  pageNumber: number;
}

export const useCreators = ({ pageNumber }: UseCreatorsProps) => {
  const { data } = useQuery(GET_DEFAULT_CREATORS_QUERY, { variables: { input: { take: 20, pageNumber } } });
  const { creators, setCreators } = useCreatorsStore();
  const { count = 0, hasNext = false, hasPrev = false, totalPages = 0 } = (data?.getDefaultCreators ?? {}) as GetAllCreatorsOutput;

  useEffect(() => {
    if (data?.getDefaultCreators.creators) {
      setCreators(data?.getDefaultCreators.creators as ExtendedUsersEntity[]);
    }
  }, [data]);

  return { creators, count, hasNext, hasPrev, totalPages };
};
