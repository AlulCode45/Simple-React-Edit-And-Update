import { Link } from "react-router-dom";

export const ProductList = (props) => {
  return props.Products.map((product) => (
    <Link
      to={"/view-product/" + product.id}
      className={"text-dark text-decoration-none"}
    >
      <div className="col" key={product.id}>
        <div className="card border-0">
          <div className="card-header product-header"></div>
          <div className="card-body">
            <span className="product-name">{product.product_name}</span>
            <p className="product-price mt-2">{product.price}</p>
          </div>
        </div>
      </div>
    </Link>
  ));
};
