import React, {useEffect, useState} from "react";
import {Col, Row, Spinner, Card} from "react-bootstrap";
import CounterCard from "../components/cards/CounterCard";
import WordCloudCard from "../components/cards/WordCloudCard";
import PieContributionCard from "../components/cards/PieContributionCard";
import ContributorTable from "../components/cards/ContributorTable";
import RepositoriesCard from "../components/cards/RepositoriesCard";
import HomeData from "../data/HomeData";
import GetToken from "../data/GetToken";

function Home() {
    const [homeData, setHomeData] = useState(undefined);
    useEffect(() => {
        GetToken(getHomeData);
    }, []);
    const getHomeData = token => {
        setHomeData(token);
    }
    if(homeData !== undefined) {
        return (
            <>
                <Row className="mt-3">
                    {
                        HomeData.StatData.map((item, index) => {
                            return (
                                <Col key={index} xl={3} sm={6} className="mb-4">
                                    <CounterCard data={item} />
                                </Col>
                            )
                        })
                    }
                </Row>
                <Row>
                    <Col className="mb-4">
                        <Card className="border-0 shadow">
                            <Card.Header className="text-secondary text-center">
                                <h2>
                                    Weekly Top Profiles
                                </h2>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    {HomeData.ContributorCardData.map((item, index) => {
                                        return (
                                            <Col key={index} lg={4} md={6} className="my-3">
                                                <ContributorTable contributorCardData={item}/>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6} className="mb-4">
                        <RepositoriesCard repositoryCardData={HomeData.RepositoryCardData} />
                    </Col>
                    <Col xl={6} className="mb-4">
                        <PieContributionCard
                            pieChartData={HomeData.PieContributionData.chartData}
                            title={'Contributions'}
                            total={HomeData.PieContributionData.total}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xl={4} lg={6} className="mb-4">
                        <WordCloudCard wordCloudData={HomeData.TopLanguageData} title={'Top Languages'} subtitle={'By Repository Count'} />
                    </Col>
                    <Col xl={4} lg={6} className="mb-4">
                        <WordCloudCard wordCloudData={HomeData.TopTopicsData} title={'Top Topics'} subtitle={'By Repository Count'} />
                    </Col>
                    <Col xl={4} lg={6} className="mb-4">
                        <WordCloudCard wordCloudData={HomeData.TopTopicsData} title={'Top Organizations'} subtitle={'By Repository Count'} />
                    </Col>
                </Row>
            </>
        );
    } else {
        return (
            <>
                <Spinner animation="border" variant="primary" />
            </>
        )
    }
}

export default Home;
  