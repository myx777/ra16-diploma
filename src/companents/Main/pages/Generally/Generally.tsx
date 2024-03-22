import Catalog from "../Catalog/Catalog";
import TopSales from "./TopSales";

const Generally = () => {
  return (
    <>
      <TopSales />
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <Catalog />
      </section>
    </>
  );
};

export default Generally;
