import React from "react";
import {Col, Row} from "react-bootstrap";
import CounterCard from "../components/cards/CounterCard";
import WordCloudCard from "../components/cards/WordCloudCard";
import PieContributionCard from "../components/cards/PieContributionCard";
import ContributorCard from "../components/cards/ContributorCard";
import RepositoriesCard from "../components/cards/RepositoriesCard";
import HomeData from "../data/HomeData";


function Home() {
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
                        pieChartData={HomeData.PieChartData.chartData}
                        title={'Contributions'}
                        total={HomeData.PieChartData.total}
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
}

export default Home;
  