import { CardType } from "../../../../types/CardType";

/**
 * Component to render a single card.
 * @param {Object} props - Component props (productncard).
 * @param {CardType[]} props.data - Array of card data.
 * @returns {JSX.Element} - Rendered card component.
 */
const Card = ({ data }: { data: CardType[] }) => {
  return (
    <>
      {data &&
        data.map((item) => (
          <div className="col-4" key={item.id}>
            <div className="card catalog-item-card"  style={{ maxHeight: '450px' }}>
              <img
                className="card-img-top img-fluid"
                src={item.images[0]}
                alt={item.title}
                style={{ height: '300px', overflow: 'hidden', margin: "auto" }}
              />
              <div className="card-body">
                <p className="card-text">{item.title}</p>
                <p className="card-text">{item.price}</p>
                <a href="/products/1.html" className="btn btn-outline-primary">
                  Заказать
                </a>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Card;
