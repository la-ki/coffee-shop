import { getSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nookies from 'nookies';
import CheckoutContent from '../../components/checkout-content/CheckoutContent';

const CheckoutPage = () => {
  return <CheckoutContent></CheckoutContent>;
};

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const session = await getSession({ req: ctx.req });

  if (!session || !cookies['checkout-session']) {
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
        'checkout',
        'addressForm',
      ])),
    },
  };
};

export default CheckoutPage;
