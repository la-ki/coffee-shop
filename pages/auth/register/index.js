import { getSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import RegisterForm from '../../../components/forms/register/RegisterForm';
import { BASE_PAGE } from '../../../constants/pages';

const RegisterPage = () => {
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace(BASE_PAGE);
      }
    });
  }, [router]);

  return <RegisterForm />;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['forms', 'register'])),
    },
  };
}

export default RegisterPage;
