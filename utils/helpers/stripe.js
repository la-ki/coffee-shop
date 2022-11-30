import { loadStripe } from '@stripe/stripe-js';

export async function stripe({ lineItems }) {
  let stripePromise = null;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(
        'pk_test_51Lg3phDY7dvAcw2fNi1ACbS7S0SrEQs7SQUwA9YfKrLvjRH1jyV4nwM8fg32Adfxzn5uXitNGqsyPPtavpdR8UU800rxDPajp8'
      );
    }
    return stripePromise;
  };

  const stripe = await getStripe();

  await stripe.redirectToCheckout({
    mode: 'payment',
    lineItems,
    successUrl: `${window.location.origin}/review`,
    cancelUrl: `${window.location.origin}/cart`,
  });
}
