import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    const data = { product_name: productName, price: productPrice };
    await fetch("http://localhost:9000/products", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    Swal.fire({
      title: "Sukses!",
      text: "Tambah produk sukses",
      icon: "success",
      timer: 1500,
    });
    navigate("/product");
  };
  return (
    <div className="container mt-4">
      <div className="card card-body shadow shadow-sm">
        <form onSubmit={saveProduct}>
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="form-group">
                <label htmlFor="productName">Nama Produk</label>
                <input
                  type="text"
                  value={productName}
                  id="productName"
                  className="form-control"
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="form-group">
                <label htmlFor="productPrice">Harga Produk</label>
                <input
                  type="text"
                  value={productPrice}
                  id="productPrice"
                  className="form-control"
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="w-100 d-flex">
            <button type="submit" className="mt-2 ms-auto btn btn-success">
              Tambah Produk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
