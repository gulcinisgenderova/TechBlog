import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

function Detail() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/blogs/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading blog data!</p>;

  return (
    <div className="containerDetail">
      <div className="detail">
        <div className="card">
          <div className="image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="texts">
            <h3 className="prodName">{product.name}</h3>
            <p className="author" >Author By: {product.username}</p>
            <p>{product.description}</p>
            <p className=" dateByy">
              Date: {new Date(product.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
