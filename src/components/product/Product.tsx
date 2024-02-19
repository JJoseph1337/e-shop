interface ProductProps {
  id: number;
  title: string;
  url: string;
}

const Product = ({ id, title, url }: ProductProps) => {
  return (
    <article key={id}>
      <h2>{title.slice(0, 5)}</h2>
      <img
        src={url}
        alt="product image"
      />
    </article>
  );
};

export default Product;
