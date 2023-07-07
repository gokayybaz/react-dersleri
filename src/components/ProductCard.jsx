import React, { useState } from "react";
import "./ProductCard.css";
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
} from "reactstrap";
export default function ProductCard(props) {
  const [radioSelected, setRadioSelected] = useState(null);
  return (
    <div className="main--product--card">
      <Card
        className="my-2"
        style={{
          width: "18rem",
        }}
      >
        <CardHeader>{props.formFactor}</CardHeader>
        <CardBody>
          <CardTitle tag="h3">{props.title}</CardTitle>
          <h6>
            <Badge className="product--card--badge" color="warning">
              Stokta Ürün
            </Badge>
          </h6>
          {/* <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText> */}
          <ButtonGroup>
            <Button
              color="primary"
              outline
              onClick={() => setRadioSelected(1)}
              active={radioSelected === 1}
            >
              Gri
            </Button>
            <Button
              color="primary"
              outline
              onClick={() => setRadioSelected(2)}
              active={radioSelected === 2}
            >
              Sarı
            </Button>
            <Button
              color="primary"
              outline
              onClick={() => setRadioSelected(3)}
              active={radioSelected === 3}
            >
              Siyah
            </Button>
          </ButtonGroup>
          {radioSelected == 1 ? (
            <p>Renk : Uzay Grisi</p>
          ) : radioSelected == 2 ? (
            <p>Renk : Altın Sarısı</p>
          ) : radioSelected == 3 ? (
            <p>Renk : Gece Siyahı</p>
          ) : (
            <p>Renk : Bilinmiyor</p>
          )}
          {/* <Button>Go somewhere</Button> */}
        </CardBody>
        <CardFooter>
          <Button color="success">Sepete Ekle</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
