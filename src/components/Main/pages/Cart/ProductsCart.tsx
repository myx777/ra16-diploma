import { ProductsPropsCart } from '../../../../types/CartTypes.ts';
import React from 'react';

const ProductsCart: React.FC<ProductsPropsCart> = ({ data, handleDelete }) => {
  const totalSum = data.reduce((acc, item) => acc + (item.price * item.count), 0);
  return (
    <section className="cart">
      <h2 className="text-center">Корзина</h2>
      <table className="table table-bordered">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Название</th>
          <th scope="col">Размер</th>
          <th scope="col">Кол-во</th>
          <th scope="col">Стоимость</th>
          <th scope="col">Итого</th>
          <th scope="col">Действия</th>
        </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <td scope="row">{index + 1}</td>
            <td><a href={`/product/${item.id}`}>{item.title}</a></td>
            <td>{item.selectedSize}</td>
            <td>{item.count}</td>
            <td>{item.price} руб.</td>
            <td>{isNaN(item.price * item.count) ? 'Ошибка' : (item.price * item.count)} руб.</td>
            <td>
              <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(item.id)}>Удалить</button>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan={5} className="text-right">Общая стоимость
          </td>
          <td>{totalSum}</td>
        </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ProductsCart;