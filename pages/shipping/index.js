import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nookies from 'nookies';
import ShippingContent from '../../components/shipping-content/ShippingContent';

const ShippingPage = () => {
  return <ShippingContent></ShippingContent>;
};

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);

  if (!cookies['shipping-session']) {
    return {
      redirect: {
        destination: '/cart',
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, [
        'shipping',
        'addressForm',
      ])),
    },
  };
};
export default ShippingPage;
