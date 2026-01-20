interface ProductCategory{
  id: number;
  name: string;
}

export interface ProductType {
  id: number;
  name: string;
  price:number;
  stock_quantity:number;
  category: ProductCategory;
}
