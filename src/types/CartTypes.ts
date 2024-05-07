export type ProductCartType = {
  id: number;
  title: string;
  price: number;
  count: number;
  selectedSize: number;
}

export type ProductsCartType = {
  data: ProductCartType[];
}

export type ProductsPropsCart = {
  data: ProductCartType[];
  handleDelete: (id: number) => void;
}

export type ProductsPropsCartForm = {
  data: ProductCartType[];
}