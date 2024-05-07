import { useEffect, useState } from 'react';
import ProductsCart from './ProductsCart.tsx';
import OrderCart from './OrderCart.tsx';
import { ProductCartType } from '../../../../types/CartTypes.ts';

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
   * Функция для извлечения данных из локального хранилища и установки их в состояние.
   * @returns {void}
   */
  const loadCartItems = () => {
    const keys = Object.keys(localStorage);
    const items = keys
      .map(key => localStorage.getItem(key)) // Получаем все значения из localStorage
      .filter(item => item !== null) // Отфильтровываем все null значения
      .map(item => JSON.parse(item!)); // Преобразуем строки JSON в объекты

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