function RepositoryTableData(topRepositories) {
    const topRepositoryData = [];
    topRepositories.forEach(item => {
        topRepositoryData.push({
            name: item.name,
            url: item.url,
            stars: item.stars,
            forks: item.forks
        })
    });
    return {
        title: "Top Repositories",
        columns: ["#", "Name", "Stars", "Forks"],
        rows: topRepositoryData
    };
}

export default RepositoryTableData;