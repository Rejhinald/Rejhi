import React from "react";

/* REACT-BOOTSTRAP */
import { Card } from "react-bootstrap";

/* REACT ROUTER */
import { Link } from "react-router-dom";

/* COMPONENTS */
import Rating from "./Rating";

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded" style={{ height: 500, width: 320 }}>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          style={{ objectFit: "cover", height: 300, width: 300 }}
        />
      </Link>

      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div" className="overflow-hidden text-nowrap">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </Card.Text>
        </div>

        <Card.Text as="h3" className="mt-2">$ {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;