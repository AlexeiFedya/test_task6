import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss'


export const Header = () => {
    return (
        <nav className="header-wrap">
            <ul className="header">
                <li className="header__title">
                    <Link 
                        to="/"
                        className="header__title__a">
                            Home
                    </Link>
                </li>
                <li className="header__title">
                    <Link 
                        to="/employee"
                        className="header__title__a">
                            Employee
                    </Link>
                </li>
            </ul>
        </nav>
    )
}