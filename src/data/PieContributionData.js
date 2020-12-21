function PieContributionData(summary) {
    const total = summary.totalCommitContributions
                + summary.totalPullRequestContributions
                + summary.totalPullRequestReviewContributions
                + summary.totalIssueContributions
                + summary.totalRepositoryContributions;
    return {
        total: total,
        chartData: [
            {
                "name": "Commits",
                "value": summary.totalCommitContributions,
                "color": "#2ca02c"
            },
            {
                "name": "Pull Requests",
                "value": summary.totalPullRequestContributions,
                "color": "#9467bd"
            },
            {
                "name": "PR Review",
                "value": summary.totalPullRequestReviewContributions,
                "color": "#ff7f0e"
            },
            {
                "name": "Issues",
                "value": summary.totalIssueContributions,
                "color": "#d62728"
            },
            {
                "name": "Repositories",
                "value": summary.totalRepositoryContributions,
                "color": "#1f77b4"
            }
        ]
    }
}

export default PieContributionData;