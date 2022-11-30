import apiEndpoints from '../apiEndpoints';

export const getFeaturedProducts = async () => {
  const response = await fetch(
    `${process.env.domain_name}${apiEndpoints.featuredProducts}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
};
