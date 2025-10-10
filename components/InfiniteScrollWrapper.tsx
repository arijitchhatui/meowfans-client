'use client';

import Loading from '@/app/loading';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
  dataLength: number;
  loading: boolean;
  onLoadMore: () => unknown;
  hasMore: boolean;
  children?: React.ReactNode;
}

export const InfiniteScrollWrapper: React.FC<Props> = ({ dataLength, onLoadMore, hasMore, loading, children }) => {
  return (
    <div className="overflow-y-scroll h-[100vh] w-full" id="scroll-id">
      {loading ? (
        <Loading />
      ) : (
        <InfiniteScroll
          loader={loading}
          hasMore={hasMore}
          scrollThreshold={0.7}
          next={onLoadMore}
          dataLength={dataLength}
          scrollableTarget="scroll-id"
        >
          {children}
        </InfiniteScroll>
      )}
    </div>
  );
};
