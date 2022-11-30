import { Box } from '@mui/system';
import { useTranslation } from 'next-i18next';
import { destroyCookie } from 'nookies';
import { useEffect, useState } from 'react';
import { useStore, useStoreUpdate } from '../../store/cart-context';
import CartCard from '../cards/cart-card/CartCard';
import OrderSummaryCard from '../cards/order-summary-card/OrderSummaryCard';
import EmptyCart from '../empty-cart/EmptyCart';
import ContentContainer from '../layout/content-wrapper/ContentContainer';
import PageWrapper from '../layout/page-wrapper/PageWrapper';
import StepTitle from '../layout/steps-title/StepTitle';

const CartContent = () => {
  const { t } = useTranslation('cart');
  const { cartStorage, totalPrice, totalQuantity } = useStore();
  const { removeCartValue, updateItemQuantity } = useStoreUpdate();
  const [cartInfo, setCartInfo] = useState({
    cartStorage: [],
    totalPrice: 0,
    totalQuantity: 0,
  });

  useEffect(() => {
    setCartInfo({
      cartStorage,
      totalPrice,
      totalQuantity,
    });
  }, [cartStorage, totalPrice, totalQuantity]);

  useEffect(() => {
    destroyCookie(null, 'checkout-session', {
      path: '/',
    });
  }, []);

  const mapProductsToDom = () => {
    if (cartInfo.cartStorage?.length) {
      return cartInfo.cartStorage.map((element, i) => (
        <CartCard
          key={i}
          product={element?.product}
          initialQuantity={element?.quantity}
          remove={removeCartValue}
          updateQuantity={updateItemQuantity}
        ></CartCard>
      ));
    } else {
      return <EmptyCart />;
    }
  };

  return (
    <PageWrapper>
      <StepTitle title={t('cart:cartTitle')} breadcrumbsArray={['Cart']} />
      <ContentContainer>
        <Box sx={{ mt: 2, mr: { md: 2, minWidth: '65%' }, mb: { xs: 6 } }}>
          {mapProductsToDom()}
        </Box>

        <Box sx={{ mt: 2 }}>
          <OrderSummaryCard
            data={{
              totalPrice: cartInfo.totalPrice,
              totalQuantity: cartInfo.totalQuantity,
            }}
          ></OrderSummaryCard>
        </Box>
      </ContentContainer>
    </PageWrapper>
  );
};

export default CartContent;
