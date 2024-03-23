import Catalog from "../Catalog/Catalog";
import Search from "./Search";

const CatalogPage = () => {
  return (
    <>
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <Search />
        <Catalog />
      </section>
    </>
  );
};

export default CatalogPage;
