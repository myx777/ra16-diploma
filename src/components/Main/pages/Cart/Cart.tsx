import { useEffect, useState } from 'react';
import ProductsCart from './ProductsCart.tsx';
import OrderCart from './OrderCart.tsx';
import { ProductCartType } from '../../../../types/CartTypes.ts';
import EmptyCart from './EmptyCart.tsx';

/**
 * Компонент корзины покупок.
 *
 * @component
 * @return {JSX.Element} Возвращает JSX элемент корзины покупок.
 */
const Cart = () => {
  /**
   * Состояние для хранения элементов корзины покупок.
   * @type {ProductCartType[]}
   */
  const [cartItems, setCartItems] = useState<ProductCartType[]>([]);

  /**
   * Функция для извлечения данных из локального хранилища с поиском по ключу магазина и установкой их в состояние.
   * @returns {void}
   */
  const loadCartItems = () => {
    const itemsString = localStorage.getItem('bosonoga');
    if (itemsString === null) {
      setCartItems([]);
      return;
    }
    const items = JSON.parse(itemsString);
    setCartItems(items);
  };

  // Вызываем функцию загрузки данных при монтировании компонента
  useEffect(() => {
    loadCartItems();
  }, []);

  /**
   * Функция для удаления элемента из корзины по его идентификатору.
   * @param {number} id - Идентификатор элемента, который необходимо удалить.
   * @returns {void}
   */
  const handleDelete = (id: number) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('bosonoga', JSON.stringify(updatedCartItems));
  };

  return (
    <>
      {(cartItems && cartItems.length > 0) ?
        (<>
          <ProductsCart data={cartItems} handleDelete={handleDelete} />
          <OrderCart data={cartItems} />
        </>) :
        <EmptyCart />
      }
    </>
  );
};

export default Cart;