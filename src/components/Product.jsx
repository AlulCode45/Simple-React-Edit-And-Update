import { ProductList } from "./ProductList";
import React from "react";
import { Link } from "react-router-dom";

export const Product = (props) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-10">
          <h3>List Produk</h3>
        </div>
        <div className="col-2 text-end">
          <Link to={"/add-product"}>
            <button className="btn btn-success">Tambah Produk</button>
          </Link>
        </div>
      </div>
      <hr />
      <div className="row row-cols-md-4 row-cols-1">
        <ProductList Products={props.products} />
      </div>
    </div>
  );
};
