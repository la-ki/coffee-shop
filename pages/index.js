import { Box } from '@mui/system';
import { useSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useEffect } from 'react';
import CompanyInfo from '../components/company-info/CompanyInfo';
import Features from '../components/features/Features';
import Hero from '../components/hero/Hero';
import FeaturedProductsList from '../components/products/featured-products-list/FeaturedPorductsList';
import { getFeaturedProducts } from '../requests/products/featuredProductsRequest';
import { useUserUpdate } from '../store/user-context';
import { getStorage } from '../utils/helpers/storage';

const Home = (props) => {
  const { data: session } = useSession();
  const { addUser } = useUserUpdate();

  useEffect(() => {
    const userData = getStorage('user-data');
    if (session?.user && userData.length === 0) {
      addUser(session.user);
    }
  }, [session, addUser]);

  return (
    <>
      <Box sx={{ width: '100%', height: '100%' }}>
        <Head>
          <title>Coffee Shop</title>
          <meta name="description" content="Random data with pagination..." />
        </Head>
        <Hero />
        <FeaturedProductsList
          featuredProducts={props.featuredProducts}
        ></FeaturedProductsList>
        <Features />
        <CompanyInfo />
      </Box>
    </>
  );
};

export async function getServerSideProps({ locale }) {
  try {
    const { message, featuredProducts } = await getFeaturedProducts();
    return {
      props: {
        ...(await serverSideTranslations(locale, ['home'])),
        message,
        featuredProducts,
      },
    };
  } catch (error) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['home'])),
        featuredProducts: [],
        message: 'error',
      },
    };
  }
}

export default Home;
