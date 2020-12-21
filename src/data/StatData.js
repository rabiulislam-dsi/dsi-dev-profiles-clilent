import {FaBuilding, FaGithub, FaStar, FaUserTie} from "react-icons/fa";
import React from "react";

function StatData(summary) {
    return [
        {
            title: "Total Developers",
            value: summary.totalDevelopers,
            icon: <FaUserTie size="3em"/>
        },
        {
            title: "Total Repositories",
            value: summary.totalRepositories,
            icon: <FaGithub size="3em"/>
        },
        {
            title: "Total Stars",
            value: summary.totalStars,
            icon: <FaStar size="3em"/>
        },
        {
            title: "Total Organizations",
            value: summary.totalOrganizations,
            icon: <FaBuilding size="3em"/>
        }
    ];
}

export default StatData;