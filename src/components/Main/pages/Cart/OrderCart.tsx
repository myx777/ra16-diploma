import { ProductsPropsCartForm } from '../../../../types/CartTypes.ts';
import React, { useState } from 'react';
import useFetch from '../../../../hooks/useFetch.ts';
import Preloader from '../../Preloader/Preloader.tsx';
import { useNavigate } from 'react-router-dom';

/**
 * формирует форму отправки заказа
 *
 *
 * @param data - массив карточек товаров
 * @constructor
 */
const OrderCart: React.FC<ProductsPropsCartForm> = ({ data }) => {
  // состояние для проверки корректности телефона
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  // состояние чекбокса
  const [isChecked, setIsChecked] = useState(false);
  // состояние модалки для чекбокса
  const [showModal, setShowModal] = useState(false);
  // состояние запроса
  const [isRequesting, setIsRequesting] = useState(false);

  const { error, fetchNow } = useFetch();
  const navigate = useNavigate();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPhone(value);
    if (!/^(\+?\d{1,3}[- ]?)?\d{10}$/.test(value)) {
      setPhoneError('Неправильный формат телефонного номера');
    } else {
      setPhoneError('');
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isChecked) {
      setIsRequesting(true);
      const form = e.currentTarget as HTMLFormElement;
      const phone: string = form.phone.value;
      const address: string = form.address.value;

      const orderData = {
        owner: {
          phone,
          address,
        },
        items: data.map((item) => ({
          id: item.id,
          price: item.price,
          count: item.count,
        })),
      };

      try {
        await fetchNow('http://localhost:7070/api/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        });

        setIsRequesting(false);

        setShowModal(true);
        setIsChecked(false);
        localStorage.clear();
        setTimeout(() => navigate('/'), 3000);

      } catch (error) {
        console.error('Ошибка:', error);
        setShowModal(true);
        setIsRequesting(false);
      }
    } else {
      setShowModal(true);
    }
  };

  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input
              className="form-control"
              id="phone"
              placeholder="Ваш телефон"
              value={phone}
              onChange={handlePhoneChange}
            />
            {phoneError && <div className="text-danger">{phoneError}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input className="form-control" id="address" placeholder="Адрес доставки"></input>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreement"
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="agreement">
              Согласен с правилами доставки
            </label>
          </div>
          <button type="submit" className="btn btn-outline-secondary">
            {isRequesting ? <Preloader /> : 'Оформить'}
          </button>
        </form>
      </div>

      {showModal && (
        <div className="modal" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{error ? 'Ошибка!' : 'Успех!'}</h5>
                <button type="button" className="close" onClick={() => setShowModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              {error ? (
                <>
                  <div className="modal-body">Произошла ошибка при отправке заказа.</div>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                    Закрыть
                  </button>
                </>
              ) : (
                <div className="modal-body">Заказ успешно оформлен!</div>
              )}
              <div className="modal-footer">
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderCart;