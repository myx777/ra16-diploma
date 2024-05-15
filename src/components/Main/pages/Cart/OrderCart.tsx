import React, { useState } from 'react';
import useFetch from '../../../../hooks/useFetch.ts';
import { useNavigate } from 'react-router-dom';
import { ProductsPropsCartForm } from '../../../../types/CartTypes.ts';
// доп библиотечка для телефонного номера
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

/**
 * формирует форму отправки заказа
 *
 *
 * @param data - массив карточек товаров
 * @constructor
 */
const OrderCart: React.FC<ProductsPropsCartForm> = ({ data }) => {
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(false);
  const navigate = useNavigate();
  const { error, fetchNow } = useFetch();

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    if (value && !/^(\+?\d{1,3}[- ]?)?\d{10}$/.test(value)) {
      setPhoneError('Неправильный формат телефонного номера');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isChecked && phoneError.length === 0 && phone.length > 7 && e.currentTarget.address.value.length > 5) {
      const form = e.currentTarget as HTMLFormElement;
      const phoneToSend = phone.startsWith('+7') ? phone.replace('+7', '7') : `7${phone}`;
      const address: string = form.address.value;

      const orderData = {
        owner: {
          phone: phoneToSend,
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

        setShowModal(true);
        setIsChecked(false);
        localStorage.clear();
        setTimeout(() => navigate('/'), 3000);

      } catch (error) {
        console.error('Ошибка:', error);
        setShowModal(true);
      }
    } else {
      setShowModal(true);
      setForm(true);
    }
  };

  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <ReactPhoneInput
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true,
              }}
              country={'ru'}
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
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="agreement">
              Согласен с правилами доставки
            </label>
          </div>
          <button type="submit" className="btn btn-outline-secondary">
            Оформить
          </button>
        </form>
      </div>

      {showModal && (
        <div className="modal" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{error ? 'Ошибка!' : form ? 'Ошибка!' : 'Успех!'}</h5>
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
              ) : form ? (
                <>
                  <div className="modal-body">Пожалуйста, заполните все поля!</div>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                    Закрыть
                  </button>
                </>
              ) : (
                <div className="modal-body">Заказ успешно оформлен!</div>
              )}
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderCart;