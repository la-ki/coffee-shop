import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { updateUser } from '../../requests/user/userUpdateRequest';
import { useUserUpdate } from '../../store/user-context';
import CardContainer from '../cards/card-container/CardContainer';
import OrderCard from '../cards/order-card/OrderCard';
import ShippingDetailsForm from '../forms/shipping-details/ShippingDetailsForm';
import ContentContainer from '../layout/content-wrapper/ContentContainer';
import PageWrapper from '../layout/page-wrapper/PageWrapper';
import StepTitle from '../layout/steps-title/StepTitle';
import Notification from '../notification/Notification';

const ProfileContent = ({ orders }) => {
  const { t } = useTranslation('profile');
  const { data: session } = useSession();
  const { updateUserInfo } = useUserUpdate();
  const [enableBtn, setEnableBtn] = useState(true);
  const [open, setOpen] = useState(false);

  const updateUserHandler = async (values) => {
    try {
      setEnableBtn(false);
      updateUserInfo(values);
      await updateUser(values, session.user._id);
      setOpen(true);
      setTimeout(() => {
        setEnableBtn(true);
      }, 5000);
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        setEnableBtn(true);
      }, 3000);
    }
  };

  const handleCloseNotification = () => {
    setOpen(false);
  };

  const mapOrdersToDom = () =>
    orders.slice(-4).map((order, i) => (
      <OrderCard
        key={i}
        data={{
          date: order.time.split('T')[0],
          name: order.shippingAddress.fullName,
          totalPrice: order.totalPrice,
        }}
      ></OrderCard>
    ));

  return (
    <PageWrapper>
      <StepTitle title={t('profile:title')} />
      <Notification
        open={open}
        handleCloseNotification={handleCloseNotification}
        notification={t('profile:notification')}
      />

      <ContentContainer>
        <Box flexGrow={1} sx={{ minWidth: '65%' }}>
          <Typography sx={{ fontSize: 20, mb: 3 }}>
            {t('profile:subtitle1')}
          </Typography>
          <ShippingDetailsForm
            submitHandler={updateUserHandler}
            enableBtn={enableBtn}
          ></ShippingDetailsForm>
        </Box>
        <Box sx={{ mt: { xs: 5, md: 0 } }}>
          <Typography
            sx={{ fontSize: 20, mb: { xs: -2, md: 3 }, ml: { md: 3 } }}
          >
            {t('profile:subtitle2')}
          </Typography>
          <CardContainer>{mapOrdersToDom()}</CardContainer>
        </Box>
      </ContentContainer>
    </PageWrapper>
  );
};

export default ProfileContent;
