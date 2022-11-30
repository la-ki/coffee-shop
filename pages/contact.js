import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContactPageForm from '../components/forms/contact/ContactPageForm';

const Contact = () => {
  return <ContactPageForm />;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['contact'])),
    },
  };
}

export default Contact;
