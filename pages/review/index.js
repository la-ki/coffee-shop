import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nookies from 'nookies';
import ReviewContent from '../../components/review-content/ReviewContent';

const ReviewPage = () => {
  return <ReviewContent></ReviewContent>;
};

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);

  if (!cookies['review-session']) {
    return {
      redirect: {
        destination: '/cart',
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['review'])),
    },
  };
};

export default ReviewPage;
