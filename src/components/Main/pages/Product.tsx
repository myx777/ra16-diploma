import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../store/hooks';

const Product = () => {
    const { id } = useAppSelector((state) => state.products);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (id !== null) {
            setIsLoading(false);
        }
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }
console.info(id);

    return (
        <div>
            <h1>Product</h1>
            {/* Дополнительный JSX для отображения данных продукта */}
        </div>
    );
}

export default Product;
