import { loadStripe } from '@stripe/stripe-js';

export const useStripe = async ({ lineItems, userInfo }) => {
  let stripePromise = null;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY);
    }
    return stripePromise;
  };

  const stripe = await getStripe();

  await stripe.redirectToCheckout({
    mode: 'payment',
    customer_email: userInfo.email,
    metadata: {
      name: userInfo.fullName,
      address: userInfo.address,
      addressLine2: userInfo.address2,
      city: userInfo.city,
      country: userInfo.country,
      postcode: userInfo.postcode,
    },
    lineItems,
    successUrl: `${window.location.origin}/review`,
    cancelUrl: `${window.location.origin}/cart`,
  });
};
