import { createContext, useContext, useState } from 'react';
import { getStorage, setStorage } from '../utils/helpers/storage';

const StorageContext = createContext({
  cartStorage: [],
  totalPrice: 0,
  totalQuantity: 0,
});
const StorageDispatchContext = createContext({
  addCartValue: (product, quantity) => {},
  clearCart: () => {},
  removeCartValue: (productId) => {},
  setCartStorage: (cart) => {},
  updateItemQuantity: (productId, quantity) => {},
});

export const useStore = () => {
  return useContext(StorageContext);
};
export const useStoreUpdate = () => {
  return useContext(StorageDispatchContext);
};

const useStorage = () => {
  const CART_KEY = 'cart-products';
  const [cartStorage, setCartStorage] = useState(getStorage(CART_KEY));
  const [totalPrice, setTotalPrice] = useState(() => {
    const cart = getStorage(CART_KEY);

    if (cart && cart.length) {
      return cart
        .map((entry) => entry?.product.price * entry?.quantity)
        .reduce((accum, curValue) => accum + curValue);
    } else {
      return 0;
    }
  });

  const [totalQuantity, setTotalQuantity] = useState(() => {
    const cart = getStorage(CART_KEY);

    if (cart && cart.length) {
      return cart.length;
    } else {
      return 0;
    }
  });

  const addCartValue = (product, quantity) => {
    const items = getStorage(CART_KEY);

    if (!items) {
      setStorage(CART_KEY, [{ product, quantity }]);
    } else {
      const isItemDuplicate = items.some(
        (item) => item.product.customID === product.customID
      );

      if (!isItemDuplicate) {
        items.push({ product, quantity });
        setTotalQuantity((prevState) => prevState + 1);
        setStorage(CART_KEY, items);
      } else {
        return;
      }
    }

    const newTotalPrice = items
      .map((entry) => entry?.product.price * entry?.quantity)
      .reduce((accum, curValue) => accum + curValue);

    setTotalPrice(newTotalPrice);

    setCartStorage(items);
  };

  const updateItemQuantity = (productId, quantity) => {
    if (quantity < 0) return;
    const items = getStorage(CART_KEY);
    let updatedItems = items;

    if (items) {
      updatedItems = items.map((entry) => {
        if (entry?.product.customID === productId) {
          console.log('true');
          entry.quantity = quantity;
        }
        return entry;
      });

      setStorage(CART_KEY, updatedItems);
    }

    const newTotalPrice = updatedItems
      .map((entry) => entry?.product.price * entry?.quantity)
      .reduce((accum, curValue) => accum + curValue);

    setTotalPrice(newTotalPrice);
    setCartStorage(updatedItems);
  };

  const clearCart = () => {
    setStorage(CART_KEY, []);
    setTotalQuantity(0);
    setTotalPrice(0);
    setCartStorage([]);
  };

  const removeCartValue = (productId) => {
    const items = getStorage(CART_KEY);

    const newStorage = items?.filter(
      (item) => item.product.customID !== productId
    );

    if (newStorage.length === 0) {
      setTotalPrice(0);
    } else {
      const newTotalPrice = newStorage
        .map((entry) => entry?.product.price * entry?.quantity)
        .reduce((accum, curValue) => accum + curValue);
      setTotalPrice(newTotalPrice);
    }
    setTotalQuantity((prevState) => prevState - 1);
    setStorage(CART_KEY, newStorage);
    setCartStorage(newStorage);
  };

  return {
    addCartValue,
    cartStorage,
    totalPrice,
    totalQuantity,
    clearCart,
    removeCartValue,
    setCartStorage,
    updateItemQuantity,
  };
};

const StorageProvider = ({ children }) => {
  const {
    cartStorage,
    totalPrice,
    totalQuantity,
    addCartValue,
    clearCart,
    setCartStorage,
    removeCartValue,
    updateItemQuantity,
  } = useStorage();

  return (
    <StorageContext.Provider value={{ cartStorage, totalPrice, totalQuantity }}>
      <StorageDispatchContext.Provider
        value={{
          addCartValue,
          clearCart,
          removeCartValue,
          setCartStorage,
          updateItemQuantity,
        }}
      >
        {children}
      </StorageDispatchContext.Provider>
    </StorageContext.Provider>
  );
};

export default StorageProvider;
