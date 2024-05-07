import Catalog from '../Catalog/Catalog';
import Search from './Search';

/**
 * Component for displaying the catalog page.
 *
 * @returns {JSX.Element}  The catalog page.
 */
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
