import React from 'react';
import {Link} from "react-router-dom";


export default function Header(props) {

    return (
        <header className="header">
            <div className="header_block container">
                <a href="/">
                    <div className="header_logo">

                    </div>
                </a>
                <nav>
                    <ul className="header_navigation">
                        <li>
                            <Link to="/about-me"
                                  className={props.location.pathname === '/about-me'
                                      ? 'active-link'
                                      : ''}>
                            About me
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio"
                                  className={props.location.pathname === '/portfolio'
                                      ? 'active-link'
                                      : ''}>
                                Portfolio
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
