import React, {useEffect, useState} from "react";
import {Col, Row, Spinner, Card} from "react-bootstrap";
import CounterCard from "../components/cards/CounterCard";
import WordCloudCard from "../components/cards/WordCloudCard";
import PieContributionCard from "../components/cards/PieContributionCard";
import ContributorTable from "../components/tables/ContributorTable";
import RepositoriesCard from "../components/cards/RepositoriesCard";
import GetToken from "../data/GetToken";
import GetHomeData from "../data/GetHomeData";

function Home() {
    const [homeData, setHomeData] = useState(undefined);
    useEffect(() => {
        GetToken(getHomeData);
    }, []);
    const getHomeData = token => {
        GetHomeData(token, setHomeData);
    }
    if(homeData !== undefined) {
        return (
            <>
                <Row className="mt-3">
                    {
                        homeData.StatData.map((item, index) => {
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
                                    {homeData.ContributorTableData.map((item, index) => {
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
                        <RepositoriesCard repositoryCardData={homeData.RepositoryCardData} />
                    </Col>
                    <Col xl={6} className="mb-4">
                        <PieContributionCard
                            pieChartData={homeData.PieContributionData.chartData}
                            title={'Contributions'}
                            total={homeData.PieContributionData.total}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xl={4} lg={6} className="mb-4">
                        <WordCloudCard wordCloudData={homeData.TopLanguageData} title={'Top Languages'} subtitle={'By Repository Count'} />
                    </Col>
                    <Col xl={4} lg={6} className="mb-4">
                        <WordCloudCard wordCloudData={homeData.TopTopicsData} title={'Top Topics'} subtitle={'By Repository Count'} />
                    </Col>
                    <Col xl={4} lg={6} className="mb-4">
                        <WordCloudCard wordCloudData={homeData.TopTopicsData} title={'Top Organizations'} subtitle={'By Repository Count'} />
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
  