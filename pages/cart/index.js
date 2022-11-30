import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CartContent from '../../components/cart-content/CartContent';

const CartPage = () => {
  return <CartContent></CartContent>;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['cart'])),
    },
  };
}

export default CartPage;
