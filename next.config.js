/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        domains: ['www.business2community.com'],
      },
      env: {
        MONGODB_URI:
          'mongodb+srv://ntasicc:pVQNcrzdoppLQBwl@cluster0.94cmo.mongodb.net/CoffeeShop?retryWrites=true&w=majority',
        NEXT_PUBLIC_MAP_KEY: 'test',
        SECRET: 'mysecretkey',
        NEXT_PUBLIC_SEND_GRID:
          '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',
        NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY:
          'pk_test_51Lg3phDY7dvAcw2fNi1ACbS7S0SrEQs7SQUwA9YfKrLvjRH1jyV4nwM8fg32Adfxzn5uXitNGqsyPPtavpdR8UU800rxDPajp8',
        domain_name: 'http://localhost:3000',
      },
      reactStrictMode: true,
      swcMinify: true,
      i18n,
      poweredByHeader: false,
    };
  }

  return {
    images: {
      domains: ['www.business2community.com'],
    },
    env: {
      MONGODB_URI:
        'mongodb+srv://ntasicc:pVQNcrzdoppLQBwl@cluster0.94cmo.mongodb.net/CoffeeShop?retryWrites=true&w=majority',
      NEXT_PUBLIC_MAP_KEY: 'test',
      SECRET: 'mysecretkey',
      NEXT_PUBLIC_SEND_GRID:
        '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',
      NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY:
        'pk_test_51Lg3phDY7dvAcw2fNi1ACbS7S0SrEQs7SQUwA9YfKrLvjRH1jyV4nwM8fg32Adfxzn5uXitNGqsyPPtavpdR8UU800rxDPajp8',
      domain_name: 'https://coffee-shop-la-ki.vercel.app/',
    },
    reactStrictMode: true,
    swcMinify: true,
    i18n,
    poweredByHeader: false,
  };
};
