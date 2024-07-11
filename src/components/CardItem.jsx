import { Button, Card } from "react-bootstrap";

const CardItem = ({ image, title }) => {
  return (
    <Card>
      <Card.Img src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="dark">Adicionar ao carrinho</Button>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
