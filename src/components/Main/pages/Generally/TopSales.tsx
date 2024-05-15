import { useEffect } from 'react';
import useFetch from '../../../../hooks/useFetch';
import Preloader from '../../Preloader/Preloader';
import NotFound from '../404';
import Card from '../Catalog/Card';
import { ProductsType } from '../../../../types/ProductsType.ts';

/**
 * Component representing the top sales section.
 * @returns {JSX.Element} The JSX element representing the top sales section.
 */

const TopSales = () => {
  const { data, isLoading, error, fetchNow } = useFetch<ProductsType[]>();

  useEffect(() => {
    fetchNow(import.meta.env.VITE_APP_TOP_SALES_URL, { method: 'GET' });
  }, []);

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {isLoading && <Preloader />}
      {error !== null && <NotFound />}
      <div className="row">
        {data && <Card data={data} />}
      </div>
    </section>
  );
};

export default TopSales;