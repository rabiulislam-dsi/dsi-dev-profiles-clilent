import React from "react";
import {Card, Table} from "react-bootstrap";

function ContributorCard({contributorCardData}) {
    return (
        <Card className="shadow py-2 border-0 contributor-card">
            <Card.Body>
                <Card.Title className="text-secondary text-center">
                    <h2>
                        {contributorCardData.title}
                    </h2>
                </Card.Title>
                <Table striped bordered hover responsive>
                    <thead>
                    <tr>
                        {contributorCardData.columns.map((item, index) => {
                            return (
                                <th key={index}>{item}</th>
                            )
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {contributorCardData.rows.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>
                                    <a href={item.url}>{item.login}</a>
                                </td>
                                <td>{item.count}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default ContributorCard;