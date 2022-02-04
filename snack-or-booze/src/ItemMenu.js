import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function ItemMenu({ items, title }) {

  const BASE_URL = title === "Snacks" ? '/snacks' : '/drinks'

  const snackText = "delicious snack"
  const drinkText = "refreshing drink"
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} Menu
          </CardTitle>
          <CardText>
            Please select one of our {title === 'Snacks' ? snackText : drinkText} options for more details including recipe!
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`${BASE_URL}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default ItemMenu;
