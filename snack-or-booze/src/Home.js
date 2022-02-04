import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <CardText>
            <p>Current serving {snacks.length} snacks and {drinks.length} drinks</p>
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
