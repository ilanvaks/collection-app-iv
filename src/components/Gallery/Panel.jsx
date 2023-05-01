import { Col, Card, Image } from "react-bootstrap"

export default function Panel({ data: { id, team, state, logo, championshipRings } }) {

  return (
    <Col key={id} sm={10} md={6} lg={4}>
      <Card className="p-3">
        <figure>
          <Image src={logo} fluid/>
        </figure>

        <div className="content">
          <h3>{team}</h3>
          <p>{state}</p>
        </div>
      </Card>
    </Col>
  )
}