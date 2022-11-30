import apiEndpoints from '../apiEndpoints';

export const updateUser = async (userData, _id) => {
  console.log(userData, _id);
  const response = await fetch(
    `${process.env.domain_name}${apiEndpoints.userUpdate}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ userData, _id }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
};
