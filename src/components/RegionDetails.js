import React from "react"
import { Link } from "gatsby"

import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap"

function RegionDetails(props) {
  return (
    <Col lg={4} md={6} sm={12} xs={12}>
      <Card className="CardDetails">
        <Card.Body>
          <Card.Title>
            {props.region.node.state} - R<sub>t</sub>:{" "}
            <strong>{parseFloat(props.region.node.ML).toFixed(2)}</strong>
          </Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="CardInterval">
              Intervallo di credibilità del 95%
              <br />
              <div style={{ clear: "both" }}>
                <span style={{ float: "left", textAlign: "left" }}>
                  Max:{" "}
                  <strong>
                    {parseFloat(props.region.node.High_90).toFixed(2)}
                  </strong>
                </span>
                <span style={{ float: "right", textAlign: "right" }}>
                  Min:{" "}
                  <strong>
                    {parseFloat(props.region.node.Low_90).toFixed(2)}
                  </strong>
                </span>
              </div>
            </ListGroupItem>
            {/*
            <ListGroupItem className="CardInterval">
              Intervallo di credibilità del 50%
              <br />
              <div style={{ clear: "both" }}>
                <span style={{ float: "left", textAlign: "left" }}>
                  Max:{" "}
                  <strong>
                    {parseFloat(props.region.node.High_50).toFixed(2)}
                  </strong>
                </span>
                <span style={{ float: "right", textAlign: "right" }}>
                  Min:{" "}
                  <strong>
                    {parseFloat(props.region.node.Low_50).toFixed(2)}
                  </strong>
                </span>
              </div>
            </ListGroupItem>
            */}
          </ListGroup>
          <Link to={`regione/${props.region.node.slug}`}>Vedi Andamento</Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default RegionDetails
