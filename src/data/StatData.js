import {FaBuilding, FaGithub, FaStar, FaUserTie} from "react-icons/fa";
import React from "react";

function StatData(summary) {
    return [
        {
            title: "Developers",
            value: summary.totalDevelopers,
            icon: <FaUserTie size="3em"/>
        },
        {
            title: "Repositories",
            value: summary.totalRepositories,
            icon: <FaGithub size="3em"/>
        },
        {
            title: "Stars",
            value: summary.totalStarsOfRepositories,
            icon: <FaStar size="3em"/>
        },
        {
            title: "Organizations",
            value: summary.totalOrganizationsContributedTo,
            icon: <FaBuilding size="3em"/>
        }
    ];
}

export default StatData;