import React from "react";
import {Col, Row} from "react-bootstrap";
import CounterCard from "../utils/CounterCard";
import {FaUserTie, FaGithub, FaStar, FaBuilding} from "react-icons/fa";
import WordCloudCard from "../utils/WordCloudCard";
import PieContributionCard from "../utils/PieContributionCard";


const StatData = [
    {
        title: "Total Developers",
        value: 120,
        icon: <FaUserTie size="3em"/>
    },
    {
        title: "Total Repositories",
        value: 2000,
        icon: <FaGithub size="3em"/>
    },
    {
        title: "Total Stars",
        value: 2500,
        icon: <FaStar size="3em"/>
    },
    {
        title: "Total Organizations",
        value: 500,
        icon: <FaBuilding size="3em"/>
    }
];
const WordCloudData = [
    {
        text: 'JAVA',
        value: 64,
    },
    {
        text: 'C++',
        value: 11,
    },
    {
        text: 'PHP',
        value: 16,
    },
    {
        text: 'C#',
        value: 17,
    },
    {
        text: 'Python',
        value: 10,
    },
    {
        text: 'GoLang',
        value: 54,
    },
    {
        text: 'Typescript',
        value: 12,
    },
    {
        text: 'Javascript',
        value: 77,
    },
    {
        text: 'Perl',
        value: 45,
    },
    {
        text: 'Fortran',
        value: 19,
    },
    {
        text: 'Cobol',
        value: 13,
    },
    {
        text: 'HTML',
        value: 32,
    },
    {
        text: 'CSS',
        value: 22,
    },
    {
        text: 'Matlab',
        value: 35,
    },
    {
        text: 'XML',
        value: 24,
    },
    {
        text: 'Ruby',
        value: 38,
    },
    {
        text: 'MySQL',
        value: 70,
    },
    {
        text: 'Matlab',
        value: 26,
    },
    {
        text: 'Objective C',
        value: 14,
    },
    {
        text: 'Ada',
        value: 29,
    },
    {
        text: 'PostgreSQL',
        value: 41,
    },
    {
        text: 'Haskell',
        value: 49,
    },
    {
        text: '.Net',
        value: 20,
    },
    {
        text: 'Labview',
        value: 59,
    },
    {
        text: 'Assembly',
        value: 49,
    },
    {
        text: 'Docker',
        value: 45,
    },
    {
        text: 'ApacheScript',
        value: 11,
    }
];
const PieChartData = {
    total: 8000,
    chartData: [
        {
            "name": "Pull Requests",
            "value": 2400,
            "color": "#1f77b4"
        },
        {
            "name": "Commits",
            "value": 4567,
            "color": "#ff7f0e"
        },
        {
            "name": "Issues",
            "value": 1398,
            "color": "#2ca02c"
        },
        {
            "name": "Repositories",
            "value": 500,
            "color": "#d62728"
        }
    ]
}


function Home() {
    return (
        <>
            <Row className="mt-3">
                {
                    StatData.map((item, index) => {
                        return (
                            <Col key={index} xl={3} md={6} className="mb-4">
                                <CounterCard data={item} />
                            </Col>
                        )
                    })
                }
            </Row>
            <Row>
                <Col xl={7} className="mb-4">
                    <WordCloudCard wordCloudData={WordCloudData} title={'Top Languages'} />
                </Col>
                <Col xl={5} className="mb-4">
                    <PieContributionCard
                        pieChartData={PieChartData.chartData}
                        title={'Contributions'}
                        total={PieChartData.total}
                    />
                </Col>
            </Row>
        </>
    );
}

export default Home;
  