import React from "react";
import {Card, Table} from "react-bootstrap";

function RepositoriesCard({repositoryCardData}) {
    return (
        <Card className="shadow py-2 border-0 repositories-card">
            <Card.Body>
                <Card.Title className="text-secondary text-center" style={{marginBottom: "2rem"}}>
                    <h2>
                        {repositoryCardData.title}
                    </h2>
                </Card.Title>
                <Table striped bordered hover responsive>
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
                                <td>{item.contributors}</td>
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