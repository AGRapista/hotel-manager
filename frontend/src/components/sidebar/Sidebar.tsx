import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

import hotelImg from '../../assets/hotel-sample.jpg';

import {
    HomeIcon,
    UsersIcon,
    BookOpenIcon
} from '@heroicons/react/24/solid';

const sidebarLinks = [
    {
        to: '/',
        label: 'Home',
        icon: <HomeIcon />
    },
    {
        to: '/users',
        label: 'Users',
        icon: <UsersIcon />
    },
    {
        to: '/dictionary',
        label: 'Dictionary',
        icon: <BookOpenIcon />
    },
];

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar-nav">
                {sidebarLinks.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                    >
                        {link.icon}
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </nav>
            {/* <img src={hotelImg}></img> */}
        </div>
    );
};

export default Sidebar;
