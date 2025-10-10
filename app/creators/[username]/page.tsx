import { CreatorProfile } from './components/CreatorProfile';

interface Props {
  params: Promise<{ username: string }>;
}

export default async function CreatorProfilePage({ params }: Props) {
  return <CreatorProfile username={(await params).username} />;
}
