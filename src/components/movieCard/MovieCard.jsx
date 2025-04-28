import { Card } from "antd";
import "./MovieCard.css";

const MovieCard = ({ item }) => {
  return (
    <div>
      <Card
        key={item.id}
        hoverable
        cover={<img className="card-img" src={item.image} />}
      >
        <Card.Meta
          className="card-meta"
          title={item.title}
          description={item.year}
        />
      </Card>
    </div>
  );
};

export default MovieCard;
