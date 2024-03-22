export type CategoriesType = {
  id: number;
  title: string;
};

export type CategoryListProps = {
  data: CategoriesType[];
  handleClick: (
    id: string | number,
    event: React.MouseEvent<HTMLLIElement>
  ) => void;
};
