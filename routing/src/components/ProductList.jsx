import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import Product from "./Product";

const ProductList = () => {
    const navigate=useNavigate()
  const [data, setData] = useState([]);
  async function getData() {
    let products = await axios.get("http://localhost:8080/products");
    setData(products.data);
  }

  const handleMore=(s)=>{
  navigate(`/productslist/${s}`)
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <table>
        <thead>
          <th>Product Name</th>
          <th>Price</th>
          <th>More details</th>
        </thead>

        <tbody>
          {data.map((e) => {
            return (
              <tr>
                <td>{e.name}</td>
                <td>{e.price}</td>
                <td>
                  <div key={e.id}>
                    {/* <Link to={`/productslist/${e.id}`}>more details</Link> */}
                    <button onClick={()=>handleMore(e.id)}>more details...</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
};

export default ProductList;
