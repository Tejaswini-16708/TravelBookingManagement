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
    image: "https://lp-cms-production.imgix.net/2019-06/GettyImages-149353949_high.jpg",
  },
  {
    location: "Goa",
    hotel: "Beach Paradise Inn",
    food: "Continental + Indian",
    transport: "Flight + Local Cab",
    places: ["Baga Beach", "Fort Aguada", "Dudhsagar Falls"],
    days: 4,
    price: 22999,
    image: "https://yu-hotel.com/wp-content/uploads/2023/03/best-luxury-hotels-in-north-goa-YU-Hotel.jpg",
  },
  {
    location: "Jaipur, Rajasthan",
    hotel: "Royal Heritage Palace",
    food: "Rajasthani Thali + Snacks",
    transport: "Train + Local Auto",
    places: ["Amber Fort", "Hawa Mahal", "City Palace"],
    days: 3,
    price: 12999,
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/2-mehrangarh-fort-jodhpur-rajasthan-city-hero?qlt=82&ts=1726660925514",
  },
  {
    location: "Shimla, Himachal Pradesh",
    hotel: "Himalayan Heights",
    food: "Veg Buffet",
    transport: "Private Car",
    places: ["Mall Road", "Jakhoo Temple", "Christ Church"],
    days: 4,
    price: 14999,
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1726730693575",
  },
  {
    location: "Kerala Backwaters",
    hotel: "Houseboat Stay",
    food: "South Indian Meals",
    transport: "Train + Cab",
    places: ["Alleppey", "Kumarakom", "Vembanad Lake"],
    days: 6,
    price: 21999,
    image: "https://lp-cms-production.imgix.net/2025-04/shutterstock2454866115.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop",
  },
  {
    location: "Ladakh",
    hotel: "Mountain Camp",
    food: "Local Tibetan Cuisine",
    transport: "Flight",
    places: ["Pangong Lake", "Leh", "Nubra Valley"],
    days: 7,
    price: 28999,
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/2-lamayuru-or-yuru-monastery-kargil-j_k-city-hero?qlt=82&ts=1726667854003",
  },
  {
    location: "Ooty, Tamil Nadu",
    hotel: "Green Valley Cottage",
    food: "South Indian + Snacks",
    transport: "Bus + Jeep",
    places: ["Botanical Garden", "Ooty Lake", "Doddabetta Peak"],
    days: 3,
    price: 9999,
    image: "https://s3.india.com/wp-content/uploads/2024/07/Historical-Places-To-Visit-In-Ooty.jpg##image/jpg",
  },
  {
    location: "Rishikesh, Uttarakhand",
    hotel: "River View Camp",
    food: "Veg Buffet",
    transport: "Bus",
    places: ["Ganga Aarti", "Laxman Jhula", "Rafting"],
    days: 2,
    price: 7999,
    image: "https://i0.wp.com/www.easeindiatrip.com/blog/wp-content/uploads/2024/12/Uttarakhand-travel-guide.jpg?fit=1200%2C601&ssl=1",
  },
  {
    location: "Darjeeling, West Bengal",
    hotel: "Tea Garden Resort",
    food: "Bengali Thali + Tea",
    transport: "Train + Jeep",
    places: ["Tiger Hill", "Batasia Loop", "Toy Train"],
    days: 5,
    price: 16999,
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/2-summer-capital-of-India-darjeeling-west-bengal-city-ff?qlt=82&ts=1726643695016",
  },
  {
    location: "Goa",
    hotel: "Ocean Breeze Resort",
    food: "Seafood Special + Buffet",
    transport: "Flight",
    places: ["Anjuna Beach", "Chapora Fort", "Night Market"],
    days: 3,
    price: 19999,
    image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2021/07/Goa_Image1-1-1.jpg",
  },
  {
    location: "Manali, Himachal Pradesh",
    hotel: "Alpine Lodge",
    food: "Buffet (All Meals)",
    transport: "Train + Bus",
    places: ["Rohtang Pass", "Jogini Falls"],
    days: 6,
    price: 18999,
    image: "https://lp-cms-production.imgix.net/2019-06/GettyImages-149353949_high.jpg",
  },
  {
    location: "Udaipur, Rajasthan",
    hotel: "Lake Palace Hotel",
    food: "Rajasthani Thali",
    transport: "Train",
    places: ["City Palace", "Pichola Lake", "Jag Mandir"],
    days: 3,
    price: 13999,
    image: "https://www.indraniwas.com/wp-content/uploads/2021/08/udaipur-1080x675-1.jpg",
  },
  {
    location: "Kodaikanal, Tamil Nadu",
    hotel: "Mist Valley Homestay",
    food: "Veg + Non-Veg Meals",
    transport: "Cab",
    places: ["Coaker's Walk", "Bryant Park", "Pillar Rocks"],
    days: 4,
    price: 11999,
    image: "https://static.toiimg.com/photo/msid-103284876,width-96,height-65.cms",
  },
  {
    location: "Coorg, Karnataka",
    hotel: "Rainforest Resort",
    food: "South Indian + Continental",
    transport: "Private Car",
    places: ["Abbey Falls", "Madikeri Fort", "Coffee Plantations"],
    days: 4,
    price: 14499,
    image: "https://starrytravels.com/starry-images/Coorg-Karnataka-Honeymoon-Packages.png",
  },
  {
  location: "Andaman and Nicobar Islands",
  hotel: "Seaside Bay Resort",
  food: "Seafood + Continental",
  transport: "Flight + Ferry",
  places: ["Radhanagar Beach", "Cellular Jail", "Havelock Island"],
  days: 6,
  price: 24999,
  image: "https://mediaim.expedia.com/destination/1/1871ba445a90f7a24374a356d6dc2e40.jpg",
},
{
  location: "Mysore, Karnataka",
  hotel: "Palace View Lodge",
  food: "South Indian + Buffet",
  transport: "Train + Cab",
  places: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens"],
  days: 3,
  price: 10999,
  image: "https://www.holidaymonk.com/wp-content/uploads/2022/05/Mysore-Palace.webp",
},
{
  location: "Shillong, Meghalaya",
  hotel: "Pine Hill Cottage",
  food: "North Eastern Delicacies",
  transport: "Flight + Taxi",
  places: ["Umiam Lake", "Elephant Falls", "Laitlum Canyons"],
  days: 5,
  price: 18999,
  image: "https://travenjo.com/wp-content/uploads/2022/06/Seven-Sisters-Falls-1-gaimg.jpg?x58748",
},
{
  location: "Varanasi, Uttar Pradesh",
  hotel: "Ganga View Guest House",
  food: "Pure Veg Thali",
  transport: "Train + Rickshaw",
  places: ["Ganga Aarti", "Kashi Vishwanath Temple", "Sarnath"],
  days: 2,
  price: 7499,
  image: "https://s7ap1.scene7.com/is/image/incredibleindia/manikarnika-ghat-city-hero?qlt=82&ts=1727959374496",
},
{
  location: "Mount Abu, Rajasthan",
  hotel: "Hilltop Resort",
  food: "Rajasthani + Multi-cuisine",
  transport: "Bus + Jeep",
  places: ["Nakki Lake", "Dilwara Temples", "Sunset Point"],
  days: 3,
  price: 9999,
  image: "https://tourism-rajasthan.in/wp-content/uploads/2023/07/download-copy.jpg",
},

  {
    location: "Agra, Uttar Pradesh",
    hotel: "Taj View Inn",
    food: "North Indian Buffet",
    transport: "Train + Auto",
    places: ["Taj Mahal", "Agra Fort", "Mehtab Bagh"],
    days: 2,
    price: 8999,
    image: "https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20250108121530.jpg",
  },
];

const UserSearchByDestination = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const found = tourPackages.find(pkg =>
      pkg.location.toLowerCase().includes(query.toLowerCase()) ||
      pkg.places.some(place => place.toLowerCase().includes(query.toLowerCase()))
    );
    setResult(found || null);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Search Tours by Destination</h2>
      <Row className="mb-4">
        <Col md={9}>
          <Form.Control
            type="text"
            placeholder="Enter destination or place name (e.g., Goa, Hawa Mahal)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Button variant="primary" onClick={handleSearch}>Search</Button>
        </Col>
      </Row>

      {result ? (
        <Card className="shadow">
          <Card.Img variant="top" src={result.image} />
          <Card.Body>
            <Card.Title>{result.location}</Card.Title>
            <Card.Text>
              <b>Hotel:</b> {result.hotel}<br />
              <b>Food:</b> {result.food}<br />
              <b>Transport:</b> {result.transport}<br />
              <b>Days:</b> {result.days}<br />
              <b>Price:</b> ₹{result.price}<br />
              <b>Places Covered:</b> {result.places.join(", ")}
            </Card.Text>
          </Card.Body>
        </Card>
      ) : query && (
        <p className="text-danger text-center">No tours found for "{query}"</p>
      )}
    </Container>
  );
};

export default UserSearchByDestination;      