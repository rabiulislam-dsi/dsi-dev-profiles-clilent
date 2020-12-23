import React from "react";
import {Card} from "react-bootstrap";
import ReactWordcloud from "react-wordcloud";
import 'tippy.js/dist/tippy.css';
import "tippy.js/animations/scale.css";

const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: false,
    fontSizes: [15, 50],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 2,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
};
function WordCloudCard({wordCloudData, title, subtitle}) {
    return (
        <Card className="shadow py-2 border-0 word-cloud-card">
            <Card.Body>
                <Card.Title className="text-secondary text-center">
                    <h2>
                        {title}
                    </h2>
                </Card.Title>
                <Card.Subtitle className="text-secondary text-center">
                    <h5>
                        {subtitle}
                    </h5>
                </Card.Subtitle>
                <ReactWordcloud words={wordCloudData} options={options}/>
            </Card.Body>
        </Card>
    )
}

export default WordCloudCard;