import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  email: Yup.string().email('Enter valid email').required('Email is required'),
});

export const contactPageSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Enter valid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});
