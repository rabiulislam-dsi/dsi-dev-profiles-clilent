import axios from 'axios'
import StatData from "./StatData";
import WordCloudData from "./WordCloudData";
import PieContributionData from "./PieContributionData";

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
        })
        .catch(error => {
            console.error(error);
        })
}

export default GetHomeData;