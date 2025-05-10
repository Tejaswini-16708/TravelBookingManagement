import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const tourPackages = [
  {
    location: "Manali, Himachal Pradesh",
    hotel: "Snow Retreat Resort",
    food: "Veg/Non-Veg Buffet",
    transport: "AC Volvo Bus",
    places: ["Solang Valley", "Hadimba Temple", "Mall Road"],
    days: 5,
    price: 17999,
    image: "https://source.unsplash.com/800x400/?manali"
  },
  {
    location: "Goa",
    hotel: "Beach Paradise Inn",
    food: "Continental + Indian",
    transport: "Flight + Local Cab",
    places: ["Baga Beach", "Fort Aguada", "Dudhsagar Falls"],
    days: 4,
    price: 22999,
    image: "https://source.unsplash.com/800x400/?goa"
  },
  {
    location: "Jaipur, Rajasthan",
    hotel: "Royal Heritage Palace",
    food: "Rajasthani Thali + Snacks",
    transport: "Train + Local Auto",
    places: ["Amber Fort", "Hawa Mahal", "City Palace"],
    days: 3,
    price: 12999,
    image: "https://source.unsplash.com/800x400/?jaipur"
  },
];

const SearchByBudget = () => {
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [filteredTours, setFilteredTours] = useState([]);

  const handleSearch = () => {
    const min = parseInt(minBudget);
    const max = parseInt(maxBudget);
    if (!min || !max || min > max) {
      alert("Enter a valid budget range.");
      return;
    }

    const results = tourPackages.filter(pkg => pkg.price >= min && pkg.price <= max);
    setFilteredTours(results);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Search Tours by Budget</h2>
      <Row className="mb-4">
        <Col md={4}>
          <Form.Control
            type="number"
            placeholder="Min Budget (₹)"
            value={minBudget}
            onChange={(e) => setMinBudget(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Form.Control
            type="number"
            placeholder="Max Budget (₹)"
            value={maxBudget}
            onChange={(e) => setMaxBudget(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Button variant="success" onClick={handleSearch}>Search</Button>
        </Col>
      </Row>

      <Row>
        {filteredTours.length > 0 ? (
          filteredTours.map((pkg, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow">
                <Card.Img variant="top" src={pkg.image} height="200" />
                <Card.Body>
                  <Card.Title>{pkg.location}</Card.Title>
                  <Card.Text>
                    <b>Hotel:</b> {pkg.hotel}<br />
                    <b>Price:</b> ₹{pkg.price}<br />
                    <b>Days:</b> {pkg.days}<br />
                    <b>Places:</b> {pkg.places.join(", ")}
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p className="text-center text-muted">No tours found in this budget range.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default SearchByBudget;
