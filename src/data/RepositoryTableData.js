function RepositoryTableData(topRepositories) {
    const topRepositoryData = [];
    topRepositories.forEach(item => {
        topRepositoryData.push({
            name: item.name,
            url: item.url,
            stars: item.totalStars,
            forks: item.totalForks
        })
    });
    return {
        title: "Top Repositories",
        columns: ["#", "Name", "Stars", "Forks"],
        rows: topRepositoryData
    };
}

export default RepositoryTableData;