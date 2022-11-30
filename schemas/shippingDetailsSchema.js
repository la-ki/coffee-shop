import * as Yup from 'yup';

export const shippingDetailsSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  address: Yup.string().required('Address is required'),
  address2: Yup.string(),
  city: Yup.string().required('City is required'),
  country: Yup.string().required('Country name is required'),
  postcode: Yup.string().required('Postal code name is required'),
});
