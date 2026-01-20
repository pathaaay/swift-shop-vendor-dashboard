import { Toaster } from "react-hot-toast";
import { AddProductForm } from "./components/add-product-form";
import { Navbar } from "./components/navbar";
import { Fragment, useEffect, useState } from "react";
import type { ProductType } from "./lib/types";
import { ProductCard } from "./components/product-card";
import { EditProductForm } from "./components/edit-product-form";

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [editProductId, setEditProductId] = useState<number | null>(null);
  const [deleteProductId, setDeleteProductId] = useState<number | null>(null);
  useEffect(() => {
    handleFetchProducts();
    return () => {};
  }, []);

  const handleFetchProducts = () => {
    const localData = localStorage.getItem("product-details") || "";

    if (localData) {
      const parsedData = JSON.parse(localData);
      if (parsedData?.length > 0) {
        setProducts(parsedData);
      }
    }
  };

  useEffect(() => {
    console.log(products);
    return () => {};
  }, [products]);

  useEffect(() => {
    if (deleteProductId) {
      if (window.confirm("Are you sure you want to delete"))
        deleteProduct(deleteProductId);
    }
    return () => {};
  }, [deleteProductId]);

  const deleteProduct = (productId: number) => {
    console.log({ productId });
    const tempProducts = products.filter(({ id }) => productId !== id);
    setProducts(tempProducts);
    localStorage.setItem("product-details", JSON.stringify(tempProducts));
    setDeleteProductId(null);
  };

  return (
    // when we want two html tags parallel in JSX then React fragments is used.
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="">02</div>
        <div className="flex flex-col justify-start gap-2 p-2">
          {products.map((product) => (
            <Fragment key={product.id}>
              <ProductCard
                product={product}
                setEditProductId={setEditProductId}
                setDeleteProductId={setDeleteProductId}
              />
            </Fragment>
          ))}
        </div>
        {editProductId ? (
          <EditProductForm
            editProductId={editProductId}
            setEditProductId={setEditProductId}
            setProducts={setProducts}
          />
        ) : (
          <AddProductForm  setProducts={setProducts} />
        )}
      </div>
      <Toaster />
    </>
  );
}

export default App;
