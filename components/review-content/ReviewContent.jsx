import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';

import { useEffect, useState } from 'react';
import { postOrder } from '../../requests/products/postOrderRequest';
import { useStoreUpdate } from '../../store/cart-context';
import {
  useCheckoutData,
  useCheckoutDataUpdate,
} from '../../store/checkout-context';
import PageWrapper from '../layout/page-wrapper/PageWrapper';
import StepTitle from '../layout/steps-title/StepTitle';

let initialRender = true;

const ReviewContent = () => {
  const { t } = useTranslation('review');
  const { checkoutStorage } = useCheckoutData();
  const { parseCheckoutValue, clearCheckout } = useCheckoutDataUpdate();
  const { clearCart } = useStoreUpdate();
  const [orderData, setOrderData] = useState({});

  const router = useRouter();

  useEffect(() => {
    if (initialRender) {
      setOrderData(parseCheckoutValue());
      postOrder(parseCheckoutValue());
      initialRender = false;
      return () => {
        clearCheckout();
        clearCart();
        destroyCookie(null, 'checkout-session', {
          path: '/',
        });
        destroyCookie(null, 'shipping-session', {
          path: '/',
        });
        destroyCookie(null, 'review-session', {
          path: '/',
        });
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkoutStorage]);

  return (
    <PageWrapper>
      <StepTitle
        title="Review"
        breadcrumbsArray={['Cart', 'Checkout', 'Shipping', 'Payment', 'Review']}
      />
      <Box sx={{ ml: { xs: 2 }, mr: { xs: 2 }, mt: 6 }}>
        <Box>
          <Typography
            sx={{
              width: '100%',
              textAlign: 'center',
              color: 'primary.main',
              fontWeight: 600,
              fontSize: 22,
            }}
          >
            {t('review:orderMsg')}
          </Typography>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography
            sx={{
              width: '100%',
              fontWeight: 600,
              mt: 2,
              textAlign: 'center',
            }}
          >
            {t('review:note')}
          </Typography>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography
            sx={{
              width: '100%',
              textAlign: 'center',
              mt: 4,
              mb: 4,
              fontSize: 44,
              fontWeight: 600,
            }}
          >
            {t('review:title')}
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: '#f2f2f2',
            my: 1,
            ml: { md: 12 },
            mr: { md: 12 },
            borderRadius: 2,
            p: 2,
          }}
        >
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            {t('review:date')}
            {orderData.time}
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: '#f2f2f2',
            ml: { md: 12 },
            mr: { md: 12 },
            borderRadius: 2,
            p: 2,
            my: 1,
          }}
        >
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            {t('review:email')}
            {orderData?.shippingAddress?.email}
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: '#f2f2f2',
            ml: { md: 12 },
            mr: { md: 12 },
            borderRadius: 2,
            p: 2,
            my: 1,
          }}
        >
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            {t('review:total')}
            {orderData?.totalPrice?.toFixed(2)}
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: '#f2f2f2',
            ml: { md: 12 },
            mr: { md: 12 },
            borderRadius: 2,
            p: 2,
            my: 1,
          }}
        >
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            {t('review:shipping')}
            {orderData?.shippingAddress?.address},{' '}
            {orderData?.shippingAddress?.city},{' '}
            {orderData?.shippingAddress?.country},{' '}
            {orderData?.shippingAddress?.postcode}
          </Typography>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              mt: 2,
              borderRadius: 2,
              p: 1,
            }}
          >
            <Button
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                height: 50,
                width: 150,
                textTransform: 'none',
                backgroundColor: '#CBA213',
                color: 'white',
                mr: 2,
                fontSize: 16,
              }}
              onClick={() => {
                router.push('/');
              }}
            >
              {t('review:back')}
            </Button>
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default ReviewContent;
