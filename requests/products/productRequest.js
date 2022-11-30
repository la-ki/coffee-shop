import apiEndpoints from '../apiEndpoints';

export const getAllProducts = async (
  pageIndex,
  category = 'All',
  filter = 'asc'
) => {
  const response = await fetch(
    `${process.env.domain_name}${apiEndpoints.products}?pageIndex=${pageIndex}&category=${category}&filterType=${filter}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
};
