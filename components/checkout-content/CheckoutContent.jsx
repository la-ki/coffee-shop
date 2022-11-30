import { Box } from '@mui/system';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { useEffect, useState } from 'react';
import { useStore } from '../../store/cart-context';
import { useCheckoutDataUpdate } from '../../store/checkout-context';
import CardContainer from '../cards/card-container/CardContainer';
import DataCard from '../cards/data-card/DataCard';
import ShippingDetailsForm from '../forms/shipping-details/ShippingDetailsForm';
import ContentContainer from '../layout/content-wrapper/ContentContainer';
import PageWrapper from '../layout/page-wrapper/PageWrapper';
import StepTitle from '../layout/steps-title/StepTitle';
import PageDescription from '../page-description/PageDescription';

const CheckoutContent = () => {
  const { t } = useTranslation('cart');
  const { cartStorage } = useStore();
  const { addCheckoutValue } = useCheckoutDataUpdate();

  const [cartData, setCartData] = useState([]);

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    setCartData(cartStorage);
  }, [cartStorage]);

  const submitHandler = (formValues) => {
    addCheckoutValue(
      cartData,
      { ...formValues, email: session.user.email },
      session.user._id
    );
    setCookie(null, 'shipping-session', 'active', {
      maxAge: 3600,
      expires: new Date(Date.now() + 3600),
      path: '/',
    });
    router.push('/shipping');
  };

  const mapProductsToDom = () => {
    return cartData?.map((entry, i) => (
      <DataCard
        key={i}
        data={entry.product}
        quantity={entry.quantity}
      ></DataCard>
    ));
  };

  return (
    <PageWrapper>
      <StepTitle
        title={t('checkout:title')}
        breadcrumbsArray={['Cart', 'Checkout']}
      />
      <PageDescription description={t('checkout:subtitle')} />
      <ContentContainer>
        <Box flexGrow={1} sx={{ minWidth: '65%' }}>
          <ShippingDetailsForm
            backBtn={true}
            isCheckout={true}
            submitHandler={submitHandler}
          ></ShippingDetailsForm>
        </Box>
        <CardContainer>{mapProductsToDom()}</CardContainer>
      </ContentContainer>
    </PageWrapper>
  );
};

export default CheckoutContent;
