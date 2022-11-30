import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const LoadMore = ({ fetchNextPage, isFetchingNextPage, hasNextPage }) => {
  const { t } = useTranslation('products');
  return (
    <Button
      onClick={fetchNextPage}
      startIcon={
        !isFetchingNextPage && (
          <Image
            src="/images/arrow.svg"
            alt="arrow down"
            width={29}
            height={29}
          />
        )
      }
      sx={{
        backgroundColor: 'primary.main',
        height: 50,
        width: 150,
        color: 'white',
        ':hover': {
          bgcolor: 'primary.main',
          color: 'white',
        },
      }}
    >
      {isFetchingNextPage && (
        <CircularProgress
          style={{
            color: '#fff',
            width: '29px',
            height: '29px',
            marginRight: '20px',
          }}
        />
      )}
      {isFetchingNextPage
        ? t('products:loading')
        : hasNextPage
        ? t('products:more')
        : t('products:end')}
    </Button>
  );
};

export default LoadMore;
