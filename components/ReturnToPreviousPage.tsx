import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/useIsMobile';
import { ArrowBigLeftDash } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
  applyReturn?: boolean;
}

export const ReturnToPreviousPage: React.FC<Props> = ({ className, applyReturn }) => {
  const router = useRouter();
  const isMobile = useIsMobile();

  if (!isMobile && !applyReturn) return null;
  return (
    <Button variant={'outline'} size={'lg'} onClick={() => router.back()} className={className}>
      <ArrowBigLeftDash />
    </Button>
  );
};
