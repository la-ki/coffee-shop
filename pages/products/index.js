import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ProductsContent from '../../components/products-content/ProductsContent';

const Products = () => {
  return <ProductsContent></ProductsContent>;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['products'])),
    },
  };
}

export default Products;
