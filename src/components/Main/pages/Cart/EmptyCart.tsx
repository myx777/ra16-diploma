/**
 * страничка, если корзина пуста
 * @return JSX.Element
 */
const EmptyCart = () => {
  return (
    <>
      <section className="d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(10vh - 10px)' }}>
        <div>
          <h2 className="text-center">Корзина пуста</h2>
        </div>
      </section>

    </>
  );
};

export default EmptyCart;