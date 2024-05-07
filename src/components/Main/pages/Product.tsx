import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch.ts';
import Preloader from '../Preloader/Preloader.tsx';
import { ProductsType } from '../../../types/ProductsType.ts';

/**
 * отрисовывает выбранный товар с характеристики после клика кнопки "заказать"
 * для дальнешей отправки товара в корзину
 * @return {JSX.Element}
 */
const Product = () => {
  const { id } = useParams();
  // Состояние для выбранного размера
  const [selectedSize, setSelectedSize] = useState<string>('');
  //
  const [count, setCount] = useState<number>(1);
  // Состояние для активности кнопки "В корзину"
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);

  const navigate = useNavigate();

  //Custom hook for fetching data.
  const { data, isLoading, error, fetchNow } = useFetch();

  useEffect(() => {
    const fetchData = async () => {
      await fetchNow(`${import.meta.env.VITE_APP_ITEMS_URL}/${id}`, { method: 'GET' });
    };

    fetchData();
  }, []);


  const selectSize = (size: string) => {
    setSelectedSize(size);
    // Активируем кнопку после выбора размера
    setIsButtonActive(true);
  };

  const addCounts = (count: number) => {
    (count === 10) ? setCount(10) : setCount((count += 1));
  };

  const reduceCounts = (count: number) => {
    (count === 1) ? setCount(1) : setCount((count -= 1));
  };

  if (isLoading || error !== null) {
    return <Preloader />;
  }

  const handleSubmit = (data: ProductsType, selectedSize: string, count: number) => {
    const { id, title, price } = data;
    localStorage.setItem(`${id}`, JSON.stringify({ id, title, price, selectedSize, count }));
    navigate(`/cart`);
  };

  return (
    <>
      {data !== undefined && (
        <section className="catalog-item">
          <h2 className="text-center">{data.title}</h2>
          <div className="row">
            <div className="col-5">
              <img src={data.images[0]} className="img-fluid" alt={data.title}></img>
            </div>
            <div className="col-7">
              <table className="table table-bordered">
                <tbody>
                <tr>
                  <td>Артикул</td>
                  <td>{data.sku}</td>
                </tr>
                <tr>
                  <td>Производитель</td>
                  <td>{data.manufacturer}</td>
                </tr>
                <tr>
                  <td>Цвет</td>
                  <td>{data.color}</td>
                </tr>
                <tr>
                  <td>Материалы</td>
                  <td>{data.material}</td>
                </tr>
                <tr>
                  <td>Сезон</td>
                  <td>{data.season}</td>
                </tr>
                <tr>
                  <td>Повод</td>
                  <td>{data.reason}</td>
                </tr>
                </tbody>
              </table>
              <div className="text-center">
                <p>Размеры в наличии:
                  {data.sizes.map((item, index) => {
                      if (item.available) {
                        return (
                          <span
                            key={index}
                            onClick={() => selectSize(item.size)}
                            style={{ cursor: 'pointer' }}
                            className={`catalog-item-size ${selectedSize === item.size ? 'selected' : ''}`}
                          >{item.size}</span>
                        );
                      }
                    },
                  )}
                </p>
                <p>Количество:
                  <span className="btn-group btn-group-sm pl-2">
                    <button className="btn btn-secondary" onClick={() => reduceCounts(count)}>-</button>
                    <span className="btn btn-outline-primary">{count}</span>
                    <button className="btn btn-secondary" onClick={() => addCounts(count)}>+</button>
                  </span>
                </p>
              </div>
              <button
                onClick={() => handleSubmit(data, selectedSize, count)}
                className={`btn btn-danger btn-block btn-lg ${isButtonActive ? '' : 'disabled'}`
                }>В корзину
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Product;


