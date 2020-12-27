import {FaBuilding, FaGithub, FaStar, FaUserTie} from "react-icons/fa";
import React from "react";

const StatData = [
    {
        title: "Total Developers",
        value: 120,
        icon: <FaUserTie size="3em"/>
    },
    {
        title: "Total Repositories",
        value: 2000,
        icon: <FaGithub size="3em"/>
    },
    {
        title: "Total Stars",
        value: 2500,
        icon: <FaStar size="3em"/>
    },
    {
        title: "Total Organizations",
        value: 500,
        icon: <FaBuilding size="3em"/>
    }
];
const TopLanguageData = [
    {
        text: 'JAVA',
        value: 64,
    },
    {
        text: 'C++',
        value: 11,
    },
    {
        text: 'PHP',
        value: 16,
    },
    {
        text: 'C#',
        value: 17,
    },
    {
        text: 'Python',
        value: 10,
    },
    {
        text: 'GoLang',
        value: 54,
    },
    {
        text: 'Typescript',
        value: 12,
    },
    {
        text: 'Javascript',
        value: 77,
    },
    {
        text: 'Perl',
        value: 45,
    },
    {
        text: 'Fortran',
        value: 19,
    },
    {
        text: 'Cobol',
        value: 13,
    },
    {
        text: 'HTML',
        value: 32,
    },
    {
        text: 'CSS',
        value: 22,
    },
    {
        text: 'Matlab',
        value: 35,
    },
    {
        text: 'XML',
        value: 24,
    },
    {
        text: 'Ruby',
        value: 38,
    },
    {
        text: 'MySQL',
        value: 70,
    },
    {
        text: 'Matlab',
        value: 26,
    },
    {
        text: 'Objective C',
        value: 14,
    },
    {
        text: 'Ada',
        value: 29,
    },
    {
        text: 'PostgreSQL',
        value: 41,
    },
    {
        text: 'Haskell',
        value: 49,
    },
    {
        text: '.Net',
        value: 20,
    },
    {
        text: 'Labview',
        value: 59,
    },
    {
        text: 'Assembly',
        value: 49,
    },
    {
        text: 'Docker',
        value: 45,
    },
    {
        text: 'ApacheScript',
        value: 11,
    }
];
const TopTopicsData = [
    {
        text: 'Game',
        value: 64,
    },
    {
        text: 'Socket Programming',
        value: 11,
    },
    {
        text: 'Chat Application',
        value: 16,
    },
    {
        text: 'Unity',
        value: 17,
    },
    {
        text: 'Machine Learning',
        value: 10,
    },
    {
        text: 'Neural Network',
        value: 54,
    },
    {
        text: 'Deep Learning',
        value: 12,
    },
    {
        text: 'Spring Boot',
        value: 77,
    },
    {
        text: 'Angular',
        value: 45,
    },
    {
        text: 'Spring MVC',
        value: 19,
    },
    {
        text: 'VueJS',
        value: 13,
    },
    {
        text: '.Net Framework',
        value: 32,
    },
    {
        text: 'Docker',
        value: 22,
    },
    {
        text: 'AWS',
        value: 35,
    },
    {
        text: 'Azure',
        value: 24,
    },
    {
        text: 'Numpy',
        value: 38,
    },
    {
        text: 'Scikit Learn',
        value: 70,
    },
    {
        text: 'OpenCV',
        value: 26,
    },
    {
        text: 'JavaFX',
        value: 14,
    },
    {
        text: 'Swing',
        value: 29,
    },
    {
        text: 'Oauth',
        value: 41,
    },
    {
        text: 'HapiJS',
        value: 49,
    },
    {
        text: 'Laravel',
        value: 20,
    },
    {
        text: 'ReactJS',
        value: 59,
    },
    {
        text: 'Tkinter',
        value: 49,
    },
    {
        text: 'Android App',
        value: 45,
    },
    {
        text: 'PWA',
        value: 11,
    }
];
const PieContributionData = {
    total: 10000,
    chartData: [
        {
            "name": "Pull Requests",
            "value": 2400,
            "color": "#1f77b4"
        },
        {
            "name": "Commits",
            "value": 4567,
            "color": "#ff7f0e"
        },
        {
            "name": "Issues",
            "value": 1398,
            "color": "#2ca02c"
        },
        {
            "name": "Repositories",
            "value": 500,
            "color": "#d62728"
        },
        {
            "name": "PR Review",
            "value": 1135,
            "color": "#9467bd"
        }
    ]
};
const ContributorTableData = [
    {
        title: "By Commits",
        columns: ["#", "Name", "Commits"],
        rows: [
            {
                name: "Yeasir Afsar",
                login: "Death-Gear",
                count: 150
            },
            {
                name: "Yeasir Afsar",
                login: "Death-Gear",
                count: 150
            },
            {
                name: "Yeasir Afsar",
                login: "Death-Gear",
                count: 150
            }
        ]
    },
    {
        title: "By Pull Requests",
        columns: ["#", "Name", "Pull Requests"],
        rows: [
            {
                name: "Yeasir Afsar",
                login: "Death-Gear",
                count: 150
            },
            {
                name: "Yeasir Afsar",
                login: "Death-Gear",
                count: 150
            },
            {
                name: "Yeasir Afsar",
                login: "Death-Gear",
                count: 150
            }
        ]
    },
    {
        title: "By Issues",
        columns: ["#", "Name", "Issues"],
        rows: [
            {
                name: "Yeasir Afsar",
                login: "Death-Gear",
                count: 150
            },
            {
                name: "Yeasir Afsar",
                login: "Death-Gear",
                count: 150
            },
            {
                name: "Yeasir Afsar",
                login: "Death-Gear",
                count: 150
            }
        ]
    },
    {
        title: "By Repository Count",
        columns: ["#", "Name", "Repositories"],
        rows: [
            {
                name: "Yeasir Afsar",
                login: "Death-Gear",
                count: 150
            },
            {
                name: "Yeasir Afsar",
                login: "Death-Gear",
                count: 150
            },
            {
                name: "Yeasir Afsar",
                login: "Death-Gear",
                count: 150
            }
        ]
    },
    {
        title: "By Repository Creation",
        columns: ["#", "Name", "Repositories"],
        rows: [
            {
                name: "Yeasir Afsar",
                login: "Death-Gear",
                count: 150
            },
            {
                name: "Yeasir Afsar",
                login: "Death-Gear",
                count: 150
            },
            {
                name: "Yeasir Afsar",
                login: "Death-Gear",
                count: 150
            }
        ]
    },
    {
        title: "By Stars",
        columns: ["#", "Name", "Stars"],
        rows: [
            {
                name: "Yeasir Afsar",
                login: "Death-Gear",
                count: 150
            },
            {
                name: "Yeasir Afsar",
                login: "Death-Gear",
                count: 150
            },
            {
                name: "Yeasir Afsar",
                login: "Death-Gear",
                count: 150
            }
        ]
    }
];
const RepositoryCardData = {
    title: "Top Repositories",
    columns: ["#", "Name", "Stars", "Forks"],
    rows: [
        {
            name: "flask-image-search",
            url: "https://github.com/Death-Gear/flask-image-search",
            stars: 10,
            forks: 6
        },
        {
            name: "flask-image-search",
            url: "https://github.com/Death-Gear/flask-image-search",
            stars: 10,
            forks: 6
        },
        {
            name: "flask-image-search",
            url: "https://github.com/Death-Gear/flask-image-search",
            stars: 10,
            forks: 6
        },
        {
            name: "flask-image-search",
            url: "https://github.com/Death-Gear/flask-image-search",
            stars: 10,
            forks: 6
        },
        {
            name: "flask-image-search",
            url: "https://github.com/Death-Gear/flask-image-search",
            stars: 10,
            forks: 6
        }
    ]

};

const HomeData = {
    StatData: StatData,
    TopLanguageData: TopLanguageData,
    TopTopicsData: TopTopicsData,
    TopOrganizationData: TopTopicsData,
    PieContributionData: PieContributionData,
    ContributorCardData: ContributorTableData,
    RepositoryCardData: RepositoryCardData
}

export default HomeData;