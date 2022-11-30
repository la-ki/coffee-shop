import apiEndpoints from '../apiEndpoints';

export const getProductsByCategory = async (categoryName) => {
  const response = await fetch(
    `${process.env.domain_name}${apiEndpoints.productsByCategory}${categoryName}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
};
