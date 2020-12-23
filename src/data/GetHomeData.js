import axios from 'axios'
import StatData from "./StatData";
import WordCloudData from "./WordCloudData";
import PieContributionData from "./PieContributionData";
import ContributorTableData from "./ContributorTableData";
import RepositoryTableData from "./RepositoryTableData";
import HomeData from "./HomeData";

function GetHomeData(token, callback) {
    const auth = 'Bearer ' + token;
    axios({
        method: 'get',
        url: '/api/summaries',
        headers: {
            'Authorization' : auth
        }
    })
        .then((response) => {
            const summary = response.data.summary;
            const statData = StatData(summary);
            const topLanguageData = WordCloudData(summary.topLanguagesByRepositoriesCount);
            const topTopicsData = WordCloudData(summary.topTopicsByRepositoryCount);
            const topOrganizationData = WordCloudData(summary.topOrganizationsByRepositoriesCount);
            const pieContributionData = PieContributionData(summary);
            const contributorTableData = ContributorTableData(summary);
            const repositoryTableData = RepositoryTableData(summary.topRepositoriesByStars);
            const homeData = {
                StatData: statData,
                TopLanguageData: topLanguageData,
                TopTopicsData: topTopicsData,
                TopOrganizationData: topOrganizationData,
                PieContributionData: pieContributionData,
                ContributorCardData: contributorTableData,
                RepositoryCardData: repositoryTableData
            }
            callback(homeData);
        })
        .catch(error => {
            console.error(error);
            callback(HomeData);
        })
}

export default GetHomeData;