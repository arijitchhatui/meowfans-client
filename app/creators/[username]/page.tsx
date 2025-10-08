import { GET_DEFAULT_CREATOR_ASSETS_QUERY } from '@/packages/gql/api/assetsAPI';
import { getClient } from '@/packages/gql/ApolloClient';
import { CreatorAssetsEntity } from '@/packages/gql/generated/graphql';
import { CreatorProfile } from './components/CreatorProfile';

interface Props {
  params: Promise<{ username: string }>;
}

export default async function CreatorProfilePage({ params }: Props) {
  const client = await getClient();
  const { data } = await client.query({
    query: GET_DEFAULT_CREATOR_ASSETS_QUERY,
    variables: { input: { limit: 5, relatedUserId: (await params).username } }
  });
  return <CreatorProfile creatorAssets={data?.getDefaultCreatorAssets as CreatorAssetsEntity[]} />;
}
