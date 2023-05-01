import { HashLink } from "react-router-hash-link";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Main () {

  return (
    <main>
      <Container>
        <Row>
          <Col><h1>Gallery</h1>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit aperiam eaque harum, quo tenetur ducimus at laboriosam veniam quis nostrum tempore, eius sequi architecto natus necessitatibus adipisci officia quas aut?</p>
            <HashLink to="/#gallery"><Button>See Gallery</Button></HashLink>
          </Col>
        </Row>
      </Container>
    </main>
  )
}