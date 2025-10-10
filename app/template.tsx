import AppHeader from '@/components/AppHeader';

interface Props {
  children: React.ReactNode;
}
export default function RootTemplate({ children }: Props) {
  return (
    <div>
      <AppHeader />
      {/* <AppNavBar /> */}
      {children}
    </div>
  );
}
