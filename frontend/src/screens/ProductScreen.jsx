import { Link, useParams } from "react-router-dom";
import React from "react";
import products from "../products";
import { Col, Row, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";

const ProductScreen = () => {
  const { id } = useParams();
  const pro = products.filter((p) => p._id === id)[0];

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      <Row>
        <Col md={5}>
          <Image src={pro.image} alt={pro.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{pro.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating key={pro._id} value={pro.rating} text={`${pro.numReviews} reviews`} />
            </ListGroup.Item>

            <ListGroup.Item>Price: ${pro.price}</ListGroup.Item>
            <ListGroup.Item>
                Description: {pro.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    {" "}
                    <strong>${pro.price}</strong>{" "}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {" "}
                    <strong>
                      {pro.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </strong>{" "}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={pro.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
