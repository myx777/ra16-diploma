import { useEffect, useState } from 'react';
import ProductsCart from './ProductsCart.tsx';
import OrderCart from './OrderCart.tsx';
import { ProductCartType } from '../../../../types/CartTypes.ts';

/**
 *
 * !TODO: Сделать корзину
 */
const Cart = () => {
  const [cartItems, setCartItems] = useState<ProductCartType[]>([]);

  // Функция для извлечения данных из локального хранилища и установки их в состояние
  const loadCartItems = () => {
    const keys = Object.keys(localStorage);
    const items: ProductCartType[] | null = keys.map(key => JSON.parse(localStorage.getItem(key)));
    setCartItems(items);
  };

  // Вызываем функцию загрузки данных при монтировании компонента
  useEffect(() => {
    loadCartItems();
  }, []);
  console.log(cartItems);

  const handleDelete = (id: number) => {
    localStorage.removeItem(id.toString());
    loadCartItems();
  };
  return (
    <>
      {cartItems && cartItems.length > 0 && (<ProductsCart data={cartItems} handleDelete={handleDelete} />)}
      <OrderCart data={cartItems} />
    </>
  );

};
export default Cart;