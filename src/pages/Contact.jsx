import React from "react";
import user1 from "../assets/Doctor Side/123.jpg";
import user2 from "../assets/Doctor Side/3454.jpg";
import user3 from "../assets/Doctor Side/4565.jpg";
import user4 from "../assets/Doctor Side/56576567.jpg";
import user5 from "../assets/Doctor Side/786.jpg";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  const userData = [
    {
      id: 1,
      img: user1,
      name: "John Doe",
      designation: "CEO",
      phone: "123-456-7890",
      address: "123 Main St, New York, NY 10030",
    },
    {
      id: 2,
      img: user2,
      name: "Emily Smith",
      designation: "Web Developer",
      phone: "123-456-7890",
      address: "123 Main St, New York, NY 10030",
    },
    {
      id: 3,
      img: user3,
      name: "Rebecca Smith",
      designation: "Director",
      phone: "123-456-7890",
      address: "123 Main St, New York, NY 10030",
    },
    {
      id: 4,
      img: user4,
      name: "William Doe",
      designation: "COO",
      phone: "123-456-7890",
      address: "St, New York, NY 10030",
    },
    {
      id: 5,
      img: user5,
      name: "Robert Williams",
      designation: "Driver",
      phone: "123-456-7890",
      address: "St, New York, NY 10030",
    },
  ];

  return (
    <div className="">
      <Container className="">
        <Row className="gap-2">
          {userData.map((data) => (
            <Col md={3} className="border border-2 px-0 rounded-2">
              <img className="rounded-top-2" width="100%" height="auto" src={data.img} alt="" />
              <div className="px-4">
                <h1>{data.name}</h1>
                <h4>{data.designation}</h4>
                <div>
                  <p>Phone: {data.phone}</p>
                  <p>{data.address}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
