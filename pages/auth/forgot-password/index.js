import { getSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ForgotPasswordForm from '../../../components/forms/forgot-password/ForgotPasswordForm';
import { BASE_PAGE } from '../../../constants/pages';

const ForgotPasswordPage = () => {
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace(BASE_PAGE);
      }
    });
  }, [router]);

  return <ForgotPasswordForm />;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'forms',
        'forgotPass',
        'common',
      ])),
    },
  };
}

export default ForgotPasswordPage;
