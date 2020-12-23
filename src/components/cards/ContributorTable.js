import React from "react";
import {Card, Table} from "react-bootstrap";

function ContributorTable({contributorCardData}) {
    const githubURL = "https://github.com/";
    return (
        <>
            <Card.Title className="text-center">{contributorCardData.title}</Card.Title>
            <Table bordered hover size="sm">
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
                            <td>
                                <a href={githubURL+item.login}>
                                    {item.name}
                                </a>
                            </td>
                            <td>{item.count}</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </>
    )
}

export default ContributorTable;