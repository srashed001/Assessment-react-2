import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function NotFound() {
    return (
      <section>
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              Not Found
            </CardTitle>
          </CardBody>
        </Card>
      </section>
    );
  }

  export default NotFound
  