function ContributorTableData(summary) {
    const topProfilesByCommits = [];
    const topProfilesByPullRequests = [];
    const topProfilesByIssues = [];
    const topProfilesByRepositories = [];
    const topProfilesByRepositoryCreation = [];
    const topProfilesByStars = [];
    summary.topProfilesByCommits.forEach(item => {
        topProfilesByCommits.push({
            name: item.name,
            login: item.githubLogin,
            count: item.totalCommitContributionsWeekly
        })
    });
    summary.topProfilesByPullRequests.forEach(item => {
        topProfilesByPullRequests.push({
            name: item.name,
            login: item.githubLogin,
            count: item.totalPullRequestContributionsWeekly
        })
    });
    summary.topProfilesByIssues.forEach(item => {
        topProfilesByIssues.push({
            name: item.name,
            login: item.githubLogin,
            count: item.totalIssueContributionsWeekly
        })
    });
    summary.topProfilesByRepositories.forEach(item => {
        topProfilesByRepositories.push({
            name: item.name,
            login: item.githubLogin,
            count: item.totalRepositories
        })
    });
    summary.topProfilesByRepositoryCreation.forEach(item => {
        topProfilesByRepositoryCreation.push({
            name: item.name,
            login: item.githubLogin,
            count: item.totalRepositoryContributionsWeekly
        })
    });
    summary.topProfilesByStars.forEach(item => {
        topProfilesByStars.push({
            name: item.name,
            login: item.githubLogin,
            count: item.totalIssueContributionsWeekly
        })
    })

    return [
        {
            title: "By Commits",
            columns: ["#", "Name", "Commits"],
            rows: topProfilesByCommits
        },
        {
            title: "By Pull Requests",
            columns: ["#", "Name", "Pull Requests"],
            rows: topProfilesByPullRequests
        },
        {
            title: "By Issues",
            columns: ["#", "Name", "Issues"],
            rows: topProfilesByIssues
        },
        {
            title: "By Repository Count",
            columns: ["#", "Name", "Repositories"],
            rows: topProfilesByRepositories
        },
        {
            title: "By Repository Creation",
            columns: ["#", "Name", "Repositories"],
            rows: topProfilesByRepositoryCreation
        },
        {
            title: "By Stars",
            columns: ["#", "Name", "Stars"],
            rows: topProfilesByStars
        }
    ];
}

export default ContributorTableData;