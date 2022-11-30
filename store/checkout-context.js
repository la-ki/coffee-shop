import { createContext, useContext, useState } from 'react';
import { getSStorage, setSStorage } from '../utils/helpers/storage';

const CheckoutContext = createContext({
  checkoutStorage: {},
});
const CheckoutDispatchContext = createContext({
  addCheckoutValue: (products, userInfo, userID) => {},
  changeContact: (email) => {},
  changeShippingData: (shippingData) => {},
  clearCheckout: () => {},
  parseCheckoutValue: () => {},
});

export const useCheckoutData = () => {
  return useContext(CheckoutContext);
};
export const useCheckoutDataUpdate = () => {
  return useContext(CheckoutDispatchContext);
};

const useCheckout = () => {
  const CHECKOUT_KEY = 'checkout-data';
  const [checkoutStorage, setCheckoutStorage] = useState(
    getSStorage(CHECKOUT_KEY)
  );

  const addCheckoutValue = (products, userInfo, userID) => {
    setSStorage(CHECKOUT_KEY, { products, userInfo, userID });

    setCheckoutStorage({ products, userInfo, userID });
  };

  const clearCheckout = () => {
    setSStorage(CHECKOUT_KEY, {});
    setCheckoutStorage({});
  };

  const parseCheckoutValue = () => {
    const items = checkoutStorage;

    const date = new Date();
    const dataToStore = {
      products: items?.products?.map((el) => el.product),
      time: date.toLocaleDateString(),
      shippingAddress: items?.userInfo,
      totalPrice: items?.products
        ?.map((entry) => entry?.product.price * entry?.quantity)
        ?.reduce((accum, curValue) => accum + curValue),
      numberOfItems: items?.products
        ?.map((entry) => entry?.quantity)
        ?.reduce((accum, curValue) => accum + curValue),
      fulfilled: false,
      owner: items?.userID,
      stripeCheckoutId: `Stripe test4`,
    };

    return dataToStore;
  };

  const changeContact = (email) => {
    const items = getSStorage(CHECKOUT_KEY);

    items.userInfo.email = email;
    setSStorage(CHECKOUT_KEY, { ...items });

    setCheckoutStorage(items);
  };

  const changeShippingData = (shippingData) => {
    const items = getSStorage(CHECKOUT_KEY);

    items.userInfo = { email: items.userInfo.email, ...shippingData };

    setSStorage(CHECKOUT_KEY, { ...items });

    setCheckoutStorage(items);
  };

  return {
    addCheckoutValue,
    clearCheckout,
    parseCheckoutValue,
    changeContact,
    changeShippingData,
    setCheckoutStorage,
    checkoutStorage,
  };
};

const CheckoutProvider = ({ children }) => {
  const {
    checkoutStorage,
    setCheckoutStorage,
    addCheckoutValue,
    clearCheckout,
    parseCheckoutValue,
    changeContact,
    changeShippingData,
  } = useCheckout();

  return (
    <CheckoutContext.Provider value={{ checkoutStorage }}>
      <CheckoutDispatchContext.Provider
        value={{
          setCheckoutStorage,
          addCheckoutValue,
          clearCheckout,
          parseCheckoutValue,
          changeContact,
          changeShippingData,
        }}
      >
        {children}
      </CheckoutDispatchContext.Provider>
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
