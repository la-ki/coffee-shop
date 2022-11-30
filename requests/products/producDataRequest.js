import apiEndpoints from '../apiEndpoints';

export const getProductData = async (productId) => {
  const response = await fetch(
    `${process.env.domain_name}${apiEndpoints.products}/${productId}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
};
