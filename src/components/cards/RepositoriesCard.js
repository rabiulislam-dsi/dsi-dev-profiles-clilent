import React from "react";
import {Card, Table} from "react-bootstrap";

function RepositoriesCard({repositoryCardData}) {
    return (
        <Card className="border-0 shadow repositories-card">
            <Card.Header className="text-secondary text-center">
                <h2>
                    {repositoryCardData.title}
                </h2>
            </Card.Header>
            <Card.Body>
                <Table bordered hover responsive>
                    <thead>
                    <tr>
                        {repositoryCardData.columns.map((item, index) => {
                            return (
                                <th key={index}>{item}</th>
                            )
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {repositoryCardData.rows.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <a href={item.url}>{item.name}</a>
                                </td>
                                <td>{item.stars}</td>
                                <td>{item.forks}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default RepositoriesCard;