import { useEffect, useState } from "react";
import type { ProductType } from "../lib/types";

interface FilterProductsProps {
  setFilteredProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  products: ProductType[];
}
export const FilterProducts = ({
  setFilteredProducts,
  products,
}: FilterProductsProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm == "") {
      setFilteredProducts(products);
    } else {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredProducts(filteredProducts);
    }
  }, [searchTerm, products]);

  return (
    <>
      <input
        id="name"
        className={`font-medium bg-white w-full text-md border  rounded-md px-2 p-1 `}
        placeholder="Filter Products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </>
  );
};
