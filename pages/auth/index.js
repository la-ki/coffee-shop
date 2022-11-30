import { getSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoginForm from '../../components/forms/login/LoginForm';
import { BASE_PAGE } from '../../constants/pages';

const AuthPage = () => {
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace(BASE_PAGE);
      }
    });
  }, [router]);

  return <LoginForm />;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['forms', 'login'])),
    },
  };
}

export default AuthPage;
