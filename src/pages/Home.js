import React, {useEffect, useState} from "react";
import {Col, Row, Spinner} from "react-bootstrap";
import CounterCard from "../components/cards/CounterCard";
import WordCloudCard from "../components/cards/WordCloudCard";
import PieContributionCard from "../components/cards/PieContributionCard";
import ContributorCard from "../components/cards/ContributorCard";
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
                                <Col key={index} xl={3} md={6} className="mb-4">
                                    <CounterCard data={item} />
                                </Col>
                            )
                        })
                    }
                </Row>
                <Row>
                    <Col xl={6} className="mb-4">
                        <WordCloudCard wordCloudData={HomeData.TopLanguageData} title={'Top Languages'} />
                    </Col>
                    <Col xl={6} className="mb-4">
                        <WordCloudCard wordCloudData={HomeData.TopTopicsData} title={'Top Technologies'} />
                    </Col>
                </Row>
                <Row>
                    <Col xl={7} className="mb-4">
                        <RepositoriesCard repositoryCardData={HomeData.RepositoryCardData} />
                    </Col>
                    <Col xl={5} className="mb-4">
                        <PieContributionCard
                            pieChartData={HomeData.PieContributionData.chartData}
                            title={'Contributions'}
                            total={HomeData.PieContributionData.total}
                        />
                    </Col>
                </Row>
                <Row>
                    {HomeData.ContributorCardData.map((item, index) => {
                        return (
                            <Col key={index} xl={6} className="mb-4">
                                <ContributorCard contributorCardData={item}/>
                            </Col>
                        )
                    })}
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
  