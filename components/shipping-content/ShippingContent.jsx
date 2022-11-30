import { Checkbox, FormControlLabel } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { useEffect, useState } from 'react';
import {
  useCheckoutData,
  useCheckoutDataUpdate,
} from '../../store/checkout-context';
import { stripe } from '../../utils/helpers/stripe';
import CardContainer from '../cards/card-container/CardContainer';
import DataCard from '../cards/data-card/DataCard';
import ContentContainer from '../layout/content-wrapper/ContentContainer';
import PageWrapper from '../layout/page-wrapper/PageWrapper';
import StepTitle from '../layout/steps-title/StepTitle';
import PageDescription from '../page-description/PageDescription';
import ButtonGroup from './shipping-btnGroup/ButtonGroup';
import ShippingData from './shipping-data/ShippingData';
import ShippingModal from './shipping-modal/ShippingModal';

const ShippingContent = () => {
  const { t } = useTranslation('shipping');
  const { checkoutStorage } = useCheckoutData();
  const { changeContact, changeShippingData } = useCheckoutDataUpdate();
  const [open, setOpen] = useState({ isOpen: false, type: '' });
  const [checkoutData, setCheckoutData] = useState({});

  const router = useRouter();

  useEffect(() => {
    setCheckoutData(checkoutStorage);
  }, [checkoutStorage]);

  const handleOpen = (type) => setOpen({ isOpen: true, type });
  const handleClose = () => setOpen({ isOpen: false, type: '' });

  const handleChangeShipping = (values) => {
    changeShippingData(values);
    handleClose();
  };

  const handleChangeContact = (values) => {
    changeContact(values);
    handleClose();
  };

  const handleStripePayment = () => {
    stripe({
      lineItems: checkoutData.products.map((el) => ({
        price: el.product.stripeID,
        quantity: el.quantity,
      })),
      userInfo: checkoutData.userInfo,
    });
    setCookie(null, 'review-session', 'active', {
      maxAge: 3600,
      expires: new Date(Date.now() + 3600),
      path: '/',
    });
  };

  const handleBackToCart = () => {
    router.replace('/cart');
  };

  const mapProductsToDom = () => {
    return checkoutData?.products?.map((entry, i) => (
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
        title={t('shipping:title')}
        breadcrumbsArray={['Cart', 'Checkout', 'Shipping']}
      />
      <PageDescription description={t('shipping:subtitle')} />
      <ContentContainer>
        <Box flexGrow={1} sx={{ minWidth: '65%' }}>
          <ShippingData
            email={checkoutData?.userInfo?.email}
            address={checkoutData?.userInfo?.address}
            city={checkoutData?.userInfo?.city}
            postcode={checkoutData?.userInfo?.postcode}
            handleOpen={handleOpen}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: '#f2f2f2',
              alignItems: 'center',
              mb: 2,
              width: { sm: '200px' },
              borderRadius: 2,
              p: 1,
            }}
          >
            <FormControlLabel
              control={<Checkbox checked disabled />}
              label={t('shipping:shippingCost')}
              sx={{ color: 'black', ml: 2 }}
            />
          </Box>
          <ButtonGroup
            handleStripePayment={handleStripePayment}
            handleBackToCart={handleBackToCart}
          />
        </Box>
        <CardContainer>{mapProductsToDom()}</CardContainer>
      </ContentContainer>
      <ShippingModal
        open={open}
        handleClose={handleClose}
        handleChangeShipping={handleChangeShipping}
        handleChangeContact={handleChangeContact}
      />
    </PageWrapper>
  );
};

export default ShippingContent;
