import React from "react";
import {AiOutlineDashboard, AiOutlineSetting, AiOutlineTeam} from "react-icons/ai";
import {RiGitRepositoryCommitsLine, RiGitRepositoryLine} from "react-icons/ri";


export const SideBarData = [
    {
        title: 'Overview',
        path: '/home',
        icon: <AiOutlineDashboard className="sidebar-icon"/>,
        cName: 'list-group-item list-group-item-action pl-5'
    },
    {
        title: 'Contributors',
        path: '/contributors',
        icon: <AiOutlineTeam className="sidebar-icon"/>,
        cName: 'list-group-item list-group-item-action pl-5'
    },
    {
        title: 'Repositories',
        path: '/repositories',
        icon: <RiGitRepositoryLine className="sidebar-icon"/>,
        cName: 'list-group-item list-group-item-action pl-5'
    },
    {
        title: 'Contributions',
        path: '/contributions',
        icon: <RiGitRepositoryCommitsLine className="sidebar-icon"/>,
        cName: 'list-group-item list-group-item-action pl-5'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <AiOutlineSetting className="sidebar-icon"/>,
        cName: 'list-group-item list-group-item-action pl-5'
    }
];
