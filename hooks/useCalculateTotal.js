import { useState } from 'react';
import { getStorage } from '../utils/helpers/storage';

const useCalculateTotal = () => {
  const CART_KEY = 'cart-products';

  const [total, setTotal] = useState(() => {
    const cart = getStorage(CART_KEY);

    if (cart && cart.length) {
      return cart
        .map((entry) => entry?.product.price * entry?.quantity)
        .reduce((accum, curValue) => accum + curValue);
    } else {
      return 0;
    }
  });

  return {
    total,
  };
};

export default useCalculateTotal;
