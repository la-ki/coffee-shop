import apiEndpoints from '../apiEndpoints';

export const createUser = async (
  fullName,
  username,
  email,
  password,
  address,
  address2,
  city,
  country,
  postcode
) => {
  const response = await fetch(
    `${process.env.domain_name}${apiEndpoints.account.createUser}`,
    {
      method: 'POST',
      body: JSON.stringify({
        fullName,
        username,
        email,
        password,
        address,
        address2,
        city,
        country,
        postcode,
      }),
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
