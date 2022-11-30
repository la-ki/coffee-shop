import apiEndpoints from '../apiEndpoints';

export const getOrdersForOwner = async (id) => {
  const response = await fetch(
    `${process.env.domain_name}${apiEndpoints.order}?ownerID=${id}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
};
