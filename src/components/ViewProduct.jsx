import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const ViewProduct = () => {
  const { id } = useParams();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    product();
  }, []);

  const product = async () => {
    const response = await fetch("http://localhost:9000/products/" + id);
    const data = await response.json();
    setProductPrice(data.price);
    setProductName(data.product_name);
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const data = { product_name: productName, price: productPrice };
    await fetch("http://localhost:9000/products/" + id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(function (response) {
      if (response.status == 200) {
        Swal.fire({
          title: "Sukses!",
          text: "Edit produk sukses",
          icon: "success",
          timer: 1500,
        });
        navigate("/product");
      }
    });
  };
  return (
    <>
      <center>
        <div className="card card-body shadow w-75 mt-5">
          <form className="text-start" onSubmit={saveProduct}>
            <div className="form-group">
              <label htmlFor="">Product Name</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Price</label>
              <input
                type="text"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="form-control"
              />
            </div>

            <button type="submit" className={"btn btn-success mt-2"}>
              Update
            </button>
          </form>
        </div>
      </center>
    </>
  );
};
