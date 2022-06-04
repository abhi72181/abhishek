import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Error from "./Error";
import axios from "axios";
const Product = () => {
  const [productInfo, setProductInfo] = useState(0);
  const [prices, setPrices] = useState(0);
  const [ids, setIds] = useState("");
  const [names, setnames] = useState("");
  const [error, setError] = useState(0)
  let { id } = useParams();
  id = +id;
  var price = 0;
  var name = "";
  var unid = "";
  console.log(id, "id");
  async function putData() {
    let naga = await axios
      .get(`http://localhost:8080/products/${id}`).catch(err=>setError(err.response.status))
      
      setProductInfo(naga)
    console.log(naga, "maga");
    //  axios.get('/user/12345')
    //  .catch(function (error) {
    //    console.log(error.toJSON());
    //  });
    //  setProductInfo(naga.data)
    // console.log("product",productInfo, "productInfo");
    // let {price,name,unid} = naga.data
    console.log("productInfo", productInfo);
    setPrices(naga.data.price);
    console.log(prices, "prices");
    setIds(naga.data.id);
    setnames(naga.data.name);
  }
  useEffect(() => {
    putData();
  }, [id, prices, ids, names]);
  return <div>{error == 404 ? <Error /> : <div><div>name:{names}</div>
  <div>Price:{prices}</div>
  <div>id:{ids}</div>
  </div>
  
  }</div>;
};

export default Product;
