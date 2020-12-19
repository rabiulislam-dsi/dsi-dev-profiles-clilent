import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import CountUp from "react-countup";

function CounterCard({data}) {
    return(
        <Card className="shadow py-2 border-0 counter-card">
            <Card.Body>
                <Row noGutters className="align-items-center">
                    <Col className="mx-3">
                        <div className="mb-1 text-uppercase text-secondary font-weight-bold">
                            <span>{data.title}</span>
                        </div>
                        <div className="mb-0 font-weight-bold">
                            <CountUp end={data.value} separator={','} className="h3 text-secondary"/>
                        </div>
                    </Col>
                    <Col xs="auto" className="text-secondary">
                        {data.icon}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default CounterCard;