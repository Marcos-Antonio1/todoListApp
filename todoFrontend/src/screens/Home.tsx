import "./home.css";
import {
    Container
}
from "reactstrap";
import Todo from "../components/Todo";

function Home () {
  return (
    <Container className="home">
      <Todo></Todo>
    </Container>
  )
}

export default Home;