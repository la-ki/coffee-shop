import { getSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ProfileContent from '../../components/profile-content/ProfileContent';
import { LOGIN_PAGE } from '../../constants/pages';
import { getOrdersForOwner } from '../../requests/orders/getOrdersForOwnerRequest';

const ProfilePage = (props) => {
  return <ProfileContent orders={props.orders.orders}></ProfileContent>;
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: LOGIN_PAGE,
        permanent: false,
      },
    };
  }

  const orders = await getOrdersForOwner(session.user._id);

  return {
    props: {
      ...(await serverSideTranslations(context.locale, [
        'profile',
        'addressForm',
      ])),
      orders,
    },
  };
}

export default ProfilePage;
