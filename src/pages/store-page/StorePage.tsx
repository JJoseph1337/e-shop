import Product from "../../components/product/Product";
import styles from "./StorePage.module.css";
import { useEffect, useState } from "react";

interface ProductItem {
  id: number;
  title: string;
  url: string;
}

const StorePage = () => {
  const [products, setProducts] = useState<ProductItem[]>(
    []
  );

  const getProducts = async () => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=10"
      );
      const _products = await res.json();
      setProducts(_products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className={styles.container}>
      {products.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          title={item.title}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default StorePage;
